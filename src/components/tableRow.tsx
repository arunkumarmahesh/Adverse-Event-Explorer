import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import { TableCellPercentage } from "./tableCellPercentage";
import { Groups, AppState } from "../utils/types";
import { TableCellBar } from "./tableCellBar";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  data: { [key: string]: any };
  headerGroups: Groups;
  headerGroupsTotal: number;
}

export const TableRow: FC<Props> = ({
  data,
  headerGroups,
  headerGroupsTotal
}) => {
  const colors = useSelector((state: AppState) => state.colors);
  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>{data[0]}</Table.Cell>
      {Object.entries(data[1]).map((value: any, key) => (
        <TableCellPercentage
          key={key}
          partialCount={value[1]}
          totalCount={headerGroupsTotal}
          style={{ color: colors[key] }}
        />
      ))}
      <TableCellPercentage
        partialCount={_.size(data[1])}
        totalCount={headerGroupsTotal}
        style={{ color: colors[3] }}
      />
      <Table.Cell />
      <Table.Cell />
    </Table.Row>
  );
};
