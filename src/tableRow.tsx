import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import { TableCellPercentage } from "./tableCellPercentage";
import { TableCellBar } from "./tableCellBar";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  data: any;
  groups: { [key: string]: number };
  groupsTotal: number;
  groupsHeighestValue: number;
  groupVariable: string;
  colors: string[];
}

export const TableRow: FC<Props> = ({
  data,
  groups,
  groupsTotal,
  groupsHeighestValue,
  groupVariable,
  colors
}) => {
  // COMPUTE SUBGROUP VALUES
  // 1. set values of subgroups to 0
  const subGroupsZero = _.mapValues(groups, () => 0);
  // 2. count available subgroups
  const subGroupsCounted = _.countBy(data[1], groupVariable);
  // 3. merge subgroups to have for every subgroup a value even if it is 0
  const subGroupsMerged = { ...subGroupsZero, ...subGroupsCounted };
  // console.log("subGroupsMerged", subGroupsMerged);

  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>{data[0]}</Table.Cell>
      {Object.entries(subGroupsMerged).map((data, key) => (
        <TableCellPercentage
          key={key}
          partialCount={data[1]}
          totalCount={groups[data[0]]}
          style={{ color: colors[key] }}
        />
      ))}
      <TableCellPercentage
        partialCount={_.size(data[1])}
        totalCount={groupsTotal}
        style={{ color: colors[3] }}
      />
      <TableCellBar
        data={subGroupsMerged}
        groupsTotal={groupsTotal}
        groupsHeighestValue={groupsHeighestValue}
      />
      <Table.Cell />
    </Table.Row>
  );
};
