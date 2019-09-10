import React, { FC, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Fuse from "fuse.js";
import { Table, Search } from "semantic-ui-react";
import CsvDownload from "react-json-to-csv";
import { AppState } from "../types";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import * as c from "../store/constants";
import * as o from "../utils/options";
import { useDetailDatas } from "../hooks/useDetailDatas";

export interface Props extends RouteComponentProps<{ id: string }> {}

export const AdverseDetails: FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const [datas, datasSize] = useDetailDatas(match.params.id);
  const [currentDatas, setCurrentDatas] = useState(datas);
  const currentDataSize = _.size(currentDatas);
  const headerTopics = _.keys(datas[0]);
  let detailSort = useSelector((state: AppState) => state.detailSort);
  const fuse = new Fuse(datas, o.fuseOptions);

  const handleSort = (clickedColumn: string) => {
    dispatch({
      type: c.SET_DETAIL_SORT,
      payload: {
        [clickedColumn]:
          detailSort![clickedColumn] && detailSort![clickedColumn] === "asc"
            ? "desc"
            : "asc"
      }
    });

    setCurrentDatas(
      _.orderBy(currentDatas, _.keys(detailSort), _.values(detailSort))
    );
  };

  const handleSearch = (e: any) => {
    if (e.currentTarget.value.length >= 2) {
      setCurrentDatas(fuse.search(e.currentTarget.value));
    } else {
      setCurrentDatas(datas);
    }
  };

  const checkSorting = (item: string): any => {
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
        <strong>{`Details for ${datasSize} ${match.params.id} records`}</strong>
      </div>
      <Search onSearchChange={handleSearch} showNoResults={false} />

      <div>{`${currentDataSize}/${datasSize} records displayed`}</div>

      <div>Click column headers to sort.</div>
      <Table sortable>
        <Table.Header>
          {headerTopics.map((item: string, key: number) => {
            console.log(
              "ä",
              !!detailSort![item]
                ? detailSort![item][1] === "asc"
                  ? "ascending"
                  : "descending"
                : undefined
            );
            console.log("ö", detailSort![item]);
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
          {currentDatas.length >= 1 ? (
            currentDatas.map((item: string, key: number) => (
              <Table.Row key={key}>
                {Object.values(item).map((entry: string, key: number) => (
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
