import React, { FC, HTMLAttributes } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import { GroupedValue } from "../../../types";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  colors: string[];
  groups: GroupedValue[];
}

export const TableHeaderGroups: FC<Props> = ({ colors, groups, ...rest }) => {
  const groupSize = groups.length + 1;
  return (
    <Table.Header {...rest}>
      <Table.Row>
        <Table.HeaderCell
          rowSpan="2"
          textAlign="center"
          style={{ width: "200px" }}
        >
          Category
        </Table.HeaderCell>
        <Table.HeaderCell colSpan={groupSize} textAlign="center">
          Groups
        </Table.HeaderCell>
        <Table.HeaderCell rowSpan="2" textAlign="center">
          AE Rate by group
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        {groups.map((group, key) => (
          <Table.HeaderCell
            key={key}
            style={{ color: colors[key] }}
            textAlign="center"
          >
            {group.name} <br />
            n={group.value}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
  );
};
