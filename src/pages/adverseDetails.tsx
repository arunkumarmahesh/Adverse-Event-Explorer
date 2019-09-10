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
  useDetailDatas(match.params.id);
  useDetailDatasCurrent();
  const datas = useSelector((state: AppState) => state.detailDatas);
  const headerTopics = _.keys(datas["original"].datas[0]);
  const detailSort = useSelector((state: AppState) => state.detailSort);

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

  const checkSorting = (item: string): any => {
    if (!!detailSort![item]) {
      return detailSort![item] === "asc" ? "ascending" : "descending";
    } else {
      return undefined;
    }
  };

  console.log("currentDatas", datas["current"].datas);
  return (
    <div>
      <Header />
      <Link to="/">back</Link>
      <div>
        <strong>{`Details for ${datas["original"].size} ${match.params.id} records`}</strong>
      </div>
      <Search onSearchChange={handleSearch} showNoResults={false} />

      <div>{`${datas["current"].size}/${datas["original"].size} records displayed`}</div>

      <div>Click column headers to sort.</div>
      <Table sortable>
        <Table.Header>
          {headerTopics.map((item: string, key: number) => {
            return (
              <Table.HeaderCell
                key={key}
                sorted={checkSorting(item)}
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
          {datas["current"].datas.length >= 1 ? (
            datas["current"].datas.map((item: t.Data, key: number) => (
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
      <CsvDownload
        filename={`${match.params.id}.csv`}
        data={datas["current"].datas}
      />
    </div>
  );
};
