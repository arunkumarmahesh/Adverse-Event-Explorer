import React, { FC, useState } from "react";
import produce from "immer";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Search, Button } from "semantic-ui-react";
import CsvDownload from "react-json-to-csv";
import { AppState } from "../types";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import * as c from "../store/constants";
import * as t from "../types";
import { useDetailDatas } from "../hooks/useDetailDatas";
import { useDetailDatasCurrent } from "../hooks/useDetailDatasCurrent";
import { useDetailDatasPaginated } from "../hooks/useDetailDatasPaginated";
import {
  TableHeaderSort,
  TableBodyDetails,
  SortButtons,
  TableFooterDetails
} from "../components";

export interface Props extends RouteComponentProps<{ id: string }> {}

export const AdverseDetails: FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const [datasDetail, datasDetailsSize] = useDetailDatas(match.params.id);
  const [currentDatas, currentDatasSize] = useDetailDatasCurrent(datasDetail);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginatedDatas = useDetailDatasPaginated(currentDatas, currentPage);
  const headerTopics = _.keys(datasDetail[0]);
  const cellCount = _.size(headerTopics);
  const detailSort = useSelector((state: AppState) => state.detailSort);
  const searchTerm = useSelector((state: AppState) => state.detailSearch);
  const resultsPerPage = useSelector((state: AppState) => state.detailPages);

  const handleSort = (
    method: string,
    clickedColumn: string,
    sortItems?: t.DetailSortItem[]
  ) => {
    const newDetailSort = produce(detailSort, draft => {
      const index = _.findIndex(detailSort, { name: clickedColumn });

      if (method === "reorder" && sortItems) {
        return sortItems;
      }

      if (method === "update") {
        if (index !== -1) {
          draft[index].direction =
            draft[index].direction === "desc" ? "asc" : "desc";
        } else {
          draft.push({ name: clickedColumn, direction: "desc" });
        }
      }

      if (method === "deleteSingle") {
        _.remove(draft, {
          name: clickedColumn
        });
      }

      if (method === "deleteAll") {
        return [];
      }
    });

    dispatch({
      type: c.SET_DETAIL_SORT,
      payload: newDetailSort
    });
  };

  const handleSearch = (e: any) => {
    if (e.currentTarget.value.length >= 2) {
      dispatch({
        type: c.SET_DETAIL_SEARCH,
        payload: e.currentTarget.value
      });
    }
  };

  const handleResultsPerPageChange = (e: any, { value }: any) => {
    dispatch({
      type: c.SET_DETAIL_PAGES,
      payload: value
    });
  };

  const handlePaginationChage = (e: any, { activePage }: any) => {
    setCurrentPage(activePage);
  };

  console.log("adverseDetails");
  return (
    <div>
      <Header />
      <Link to="/">back</Link>
      <div>
        <strong>{`Details for ${datasDetailsSize} ${match.params.id} records`}</strong>
      </div>
      <Search
        onSearchChange={handleSearch}
        showNoResults={false}
        value={searchTerm}
      />
      <Button
        onClick={() => {
          dispatch({
            type: c.SET_DETAIL_SEARCH,
            payload: ""
          });
        }}
      >
        Delete Search
      </Button>

      <div>{`${currentDatasSize}/${datasDetailsSize} records displayed`}</div>

      <SortButtons sortItems={detailSort} handleSort={handleSort} />

      {!detailSort && <div>Click column headers to sort.</div>}

      <Table sortable>
        <TableHeaderSort
          multiSort={detailSort}
          headerTopics={headerTopics}
          handleSort={handleSort}
        />
        <TableBodyDetails datas={paginatedDatas} />
        <TableFooterDetails
          currentPage={currentPage}
          columnCount={cellCount}
          dataSize={currentDatasSize}
          resultsPerPage={resultsPerPage}
          handleResultsPerPageChange={handleResultsPerPageChange}
          handlePaginationChange={handlePaginationChage}
        />
      </Table>
      <CsvDownload filename={`${match.params.id}.csv`} data={currentDatas} />
    </div>
  );
};
