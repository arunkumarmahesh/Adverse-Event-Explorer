import React, { FC, useState } from "react";
import produce from "immer";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Button } from "semantic-ui-react";
import { SET_DETAIL_SORT, SET_DETAIL_PAGES } from "../store/constants";
import { DetailsInfoBlock } from "./components/detailsInfoBlock/detailsInfoBlock";
import { DetailsSortBlock } from "./components/detailsSortBlock/detailsSortBlock";
import { DetailsSearchBlock } from "./components/detailsSearchBlock/detailsSearchBlock";
import {
  useDetailDatas,
  useDetailDatasCurrent,
  useDetailDatasPaginated,
  useScrollTop
} from "../hooks";
import {
  AEHeader,
  TableHeaderSort,
  TableBodyDetails,
  TableFooterDetails,
  CSVExport
} from "../components";
import { AppState, DetailSortItem } from "../types";

export interface Props extends RouteComponentProps<{ id: string }> {}

export const AdverseDetails: FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const [datasDetail, datasDetailsSize] = useDetailDatas(match.params.id);
  const [currentDatas, currentDatasSize] = useDetailDatasCurrent(datasDetail);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useScrollTop(currentPage);
  const paginatedDatas = useDetailDatasPaginated(currentDatas, currentPage);
  const headerTopics = _.keys(datasDetail[0]);
  const cellCount = _.size(headerTopics);
  const detailSort = useSelector((state: AppState) => state.detailSort);
  const resultsPerPage = useSelector((state: AppState) => state.detailPages);

  const handleSort = (
    method: string,
    clickedColumn: string,
    sortItems?: DetailSortItem[]
  ) => {
    const newDetailSort = produce(detailSort, draft => {
      const index = _.findIndex(detailSort, { name: clickedColumn });

      switch (method) {
        case "reorder":
          return sortItems ? sortItems : [];
        case "update":
          index !== -1
            ? (draft[index].direction =
                draft[index].direction === "desc" ? "asc" : "desc")
            : draft.push({ name: clickedColumn, direction: "desc" });
          return draft;
        case "deleteSingle":
          _.remove(draft, {
            name: clickedColumn
          });
          return draft;
        case "deleteAll":
          return [];
      }
    });

    dispatch({
      type: SET_DETAIL_SORT,
      payload: newDetailSort
    });
  };

  const handleResultsPerPageChange = (e: Event, { value }: never) => {
    dispatch({
      type: SET_DETAIL_PAGES,
      payload: value
    });
  };

  const handlePaginationChange = (e: Event, { activePage }: never) => {
    setCurrentPage(activePage);
  };

  return (
    <div>
      <AEHeader />
      <DetailsInfoBlock
        resultsCount={datasDetailsSize}
        category={match.params.id}
      />
      <DetailsSearchBlock
        resultsSearched={currentDatasSize}
        resultsTotal={datasDetailsSize}
      />
      <DetailsSortBlock sortItems={detailSort} handleSort={handleSort} />
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
          handlePaginationChange={handlePaginationChange}
        />
      </Table>
      <CSVExport filename={`${match.params.id}.csv`} data={currentDatas}>
        <Button>Export CSV</Button>
      </CSVExport>
    </div>
  );
};
