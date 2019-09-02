import React, { FC } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  groups: { [key: string]: number };
  groupsTotal: number;
  colors: string[];
}

export const TableHeader: FC<Props> = ({ groups, groupsTotal, colors }) => {
  const groupSize = _.size(groups) + 1;
  console.log("groupSize", groupSize); // 4 when ARM

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan="2">Category</Table.HeaderCell>
        <Table.HeaderCell colSpan={groupSize}>Groups</Table.HeaderCell>
        <Table.HeaderCell rowSpan="2">AE Rate by group</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        {Object.entries(groups).map((data, key) => (
          <Table.HeaderCell key={data[0]} style={{ color: colors[key] }}>
            {data[0]} <br />
            n={data[1]}
          </Table.HeaderCell>
        ))}
        <Table.HeaderCell style={{ color: colors[3] }}>
          Total <br />
          n={groupsTotal}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
