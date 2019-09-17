import React, { FC, HTMLAttributes } from "react";
import { Table } from "semantic-ui-react";
import { GroupedValue, SortColumn } from "../../../types";
import { TableHeaderCellSort } from "../..";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  colors: string[];
  groups: GroupedValue[];
  sortColumns: SortColumn[];
  handleSort: (
    method: string,
    clickedColumn: string,
    sortColumns: SortColumn[]
  ) => void;
}

export const TableHeaderGroups: FC<Props> = ({
  colors,
  groups,
  sortColumns,
  handleSort,
  ...rest
}) => {
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
        <Table.HeaderCell colSpan={groups.length} textAlign="center">
          Groups
        </Table.HeaderCell>
        <Table.HeaderCell rowSpan="2" textAlign="center">
          AE Rate by group
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        {groups.map((group, key) => (
          <TableHeaderCellSort
            color={colors[key]}
            key={group.name}
            currentColumnName={group.name}
            sortColumns={sortColumns}
            handleSort={() => {
              handleSort("update", group.name, sortColumns);
            }}
          >
            {group.name} <br />
            n={group.value}
          </TableHeaderCellSort>
        ))}
      </Table.Row>
    </Table.Header>
  );
};
