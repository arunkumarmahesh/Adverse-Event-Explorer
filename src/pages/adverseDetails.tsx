import React, { FC, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";
import { AppState } from "../utils/types";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import CsvDownload from "react-json-to-csv";

export interface Props extends RouteComponentProps<{ id: string }> {}

export const AdverseDetails: FC<Props> = ({ match }) => {
  const datas = useSelector((state: AppState) => state.datas);
  const category = match.params.id;
  const categoryDatas = _.filter(datas, data => data.AEBODSYS === category);
  const keys = _.keys(datas[0]);
  const [column, setColumn] = useState();
  const [direction, setDirection] = useState();
  const [sortedDatas, setSortedDatas] = useState(categoryDatas);

  const handleSort = (clickedColumn: string) => {
    if (column !== clickedColumn) {
      setColumn(clickedColumn);
      setDirection("ascending");
      setSortedDatas(_.sortBy(categoryDatas, [clickedColumn]));
      return;
    }

    setSortedDatas(sortedDatas.reverse());
    setDirection(direction === "ascending" ? "descending" : "ascending");
  };

  return (
    <div>
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
          {sortedDatas.map((item: string, key: number) => (
            <Table.Row key={key}>
              {Object.values(item).map((entry: string, key: number) => (
                <Table.Cell key={key}>
                  <div>{entry}</div>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <CsvDownload filename={`${category}.csv`} data={sortedDatas} />
    </div>
  );
};
