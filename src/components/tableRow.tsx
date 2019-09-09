import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import { TableCellPercentage } from "./tableCellPercentage";
import { Groups, AppState, Data } from "../types";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  data: { [key: string]: any };
}

export const TableRow: FC<Props> = ({ data }) => {
  const colors = useSelector((state: AppState) => state.colors);

  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>{data[0]}</Table.Cell>
      <Table.Cell style={{ maxWidth: "50px", padding: "0px" }} />
      {Object.entries(data[1]).map((value: any, key) => (
        <TableCellPercentage
          key={key}
          partialCount={value[1]}
          style={{ color: colors[key] }}
        />
      ))}
      <TableCellPercentage
        partialCount={_.size(data[1])}
        style={{ color: colors[3] }}
      />
      <Table.Cell />
      <Table.Cell />
    </Table.Row>
  );
};
