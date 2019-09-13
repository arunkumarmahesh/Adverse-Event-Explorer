import React, { FC, HTMLAttributes } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { GroupedValue } from "../../../types";

import { TableHeaderCellPercentage } from "../tableHeaderCellPercentage/tableHeaderCellPercentage";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  colors: string[];
  groups: GroupedValue[];
}

export const TableFooterGroups: FC<Props> = ({ colors, groups, ...rest }) => {
  return (
    <Table.Header {...rest}>
      <Table.Row>
        <Table.HeaderCell textAlign="center" style={{ width: "200px" }}>
          All
        </Table.HeaderCell>
        {groups.map((group, key) => (
          <TableHeaderCellPercentage
            key={key}
            partialCount={group.value}
            totalCount={group.total}
            style={{ color: colors[key] }}
          />
        ))}
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
