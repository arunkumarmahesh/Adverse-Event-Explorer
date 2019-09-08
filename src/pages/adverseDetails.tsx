import React, { FC, useState, MouseEvent } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";
import { AppState } from "../utils/types";
import _ from "lodash";
import { Table, Search } from "semantic-ui-react";
import CsvDownload from "react-json-to-csv";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";

export interface Props extends RouteComponentProps<{ id: string }> {}

export const AdverseDetails: FC<Props> = ({ match }) => {
  const allDatas = useSelector((state: AppState) => state.datas);
  const datas = _.filter(allDatas, data => data.AEBODSYS === match.params.id);
  const datasSize = _.size(datas);
  const [currentDatas, setCurrentDatas] = useState(datas);
  const currentDataSize = _.size(currentDatas);
  const keys = _.keys(allDatas[0]);
  const [column, setColumn] = useState();
  const [direction, setDirection] = useState();

  const options = {
    keys: ["AETERM", "AEDECOD", "AESEV", "AEREL", "AEOUT"],
    threshold: 0
  };
  const fuse = new Fuse(datas, options);

  const handleSort = (clickedColumn: string) => {
    if (column !== clickedColumn) {
      setColumn(clickedColumn);
      setDirection("ascending");
      setCurrentDatas(_.sortBy(currentDatas, [clickedColumn]));
      return;
    }

    setCurrentDatas(currentDatas.reverse());
    setDirection(direction === "ascending" ? "descending" : "ascending");
  };

  const handleSearch = (e: any) => {
    if (e.currentTarget.value.length >= 2) {
      setCurrentDatas(fuse.search(e.currentTarget.value));
    } else {
      setCurrentDatas(datas);
    }
  };

  console.log("curentDatas", currentDatas);
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
          {keys.map((item: string, key: number) => (
            <Table.HeaderCell
              key={key}
              sorted={column === item ? direction : undefined}
              onClick={() => {
                handleSort(item);
              }}
            >
              {item}
            </Table.HeaderCell>
          ))}
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
