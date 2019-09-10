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

  const setSortIcon = (item: string): any => {
    if (!!detailSort![item]) {
      return detailSort![item] === "asc" ? "ascending" : "descending";
    } else {
      return undefined;
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
        <Table.Header>
          {headerTopics.map((item: string, key: number) => {
            return (
              <Table.HeaderCell
                key={key}
                sorted={setSortIcon(item)}
                onClick={() => {
                  handleSort(item);
                }}
              >
                {item}
              </Table.HeaderCell>
            );
          })}
        </Table.Header>
        <Table.Body>
          {currentDatas.length >= 1 ? (
            currentDatas.map((item: t.Data, key: number) => (
              <Table.Row key={key}>
                {Object.values(item).map((entry: any, key: number) => (
                  <Table.Cell key={key}>
                    <div>{entry}</div>
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan="4">No data selected.</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <CsvDownload filename={`${match.params.id}.csv`} data={currentDatas} />
    </div>
  );
};
