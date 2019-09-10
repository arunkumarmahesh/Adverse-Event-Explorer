import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table, Search } from "semantic-ui-react";
import CsvDownload from "react-json-to-csv";
import { AppState } from "../types";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import * as c from "../store/constants";
import * as t from "../types";
import { useDetailDatas } from "../hooks/useDetailDatas";
import { useDetailDatasCurrent } from "../hooks/useDetailDatasCurrent";
import { TableHeaderSort, TableBodyDetails } from "../components";

export interface Props extends RouteComponentProps<{ id: string }> {}

export const AdverseDetails: FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const [datasDetail, datasDetailsSize] = useDetailDatas(match.params.id);
  const [currentDatas, currentDatasSize] = useDetailDatasCurrent(datasDetail);
  const headerTopics = _.keys(datasDetail[0]);
  const detailSort = useSelector((state: AppState) => state.detailSort);
  const searchTerm = useSelector((state: AppState) => state.detailSearch);

  const handleSort = (clickedColumn: string) => {
    dispatch({
      type: c.SET_DETAIL_SORT,
      payload: {
        ...detailSort,
        ...{
          [clickedColumn]:
            detailSort![clickedColumn] === "desc" ? "asc" : "desc"
        }
      }
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

      <div>{`${currentDatasSize}/${datasDetailsSize} records displayed`}</div>

      <div>Click column headers to sort.</div>
      <Table sortable>
        <TableHeaderSort
          multiSort={detailSort}
          headerTopics={headerTopics}
          handleSort={handleSort}
        />
        <TableBodyDetails datas={currentDatas} />
      </Table>
      <CsvDownload filename={`${match.params.id}.csv`} data={currentDatas} />
    </div>
  );
};
