import React, { FC } from "react";
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
  const groupItems = _.countBy(data[1], groupVariable);

  // COMPUTE GROUP VALUES
  // 1. set values of groups to 0
  const subGroupsZero = _.mapValues(groups, () => 0);
  // 2. count available groups
  const subGroupsCounted = _.countBy(data[1], groupVariable);
  // 3. merge groups to have for every group a value even if it is 0
  const subGroupsMerged = { ...subGroupsZero, ...subGroupsCounted };
  console.log("subGroupsMerged", subGroupsMerged);

  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>{data[0]}</Table.Cell>
      {Object.entries(subGroupsMerged).map((data, key) => (
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
