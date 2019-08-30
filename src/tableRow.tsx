import React, { FC, useState, MouseEvent } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import { TableCellPercentage } from "./tableCellPercentage";
import { TableCellChart } from "./tableCellChart";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  data: any;
  groups: { [key: string]: number };
  groupsTotal: number;
  groupVariable: string;
}

export const TableRow: FC<Props> = ({
  data,
  groups,
  groupsTotal,
  groupVariable
}) => {
  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>{data[0]}</Table.Cell>
      {Object.entries(_.countBy(data[1], groupVariable)).map((data, key) => (
        <TableCellPercentage
          key={key}
          partialCount={data[1]}
          totalCount={groups[data[0]]}
        />
      ))}
      <TableCellPercentage
        partialCount={_.size(data[1])}
        totalCount={groupsTotal}
      />
      <TableCellChart />
    </Table.Row>
  );
};
