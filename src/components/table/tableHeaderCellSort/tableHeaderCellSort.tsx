import React, { FC } from "react";
import { Table, Icon, SemanticICONS } from "semantic-ui-react";
import { SortColumn } from "../../../types";

export interface Props {
  label: string;
  sortColumns: SortColumn[];
  exludedColumns?: string[];
  handleSort: (
    method: string,
    clickedColumn: string,
    sortColumns: SortColumn[]
  ) => void;
}

export const TableHeaderCellSort: FC<Props> = ({
  label = "test",
  sortColumns,
  exludedColumns,
  handleSort
}) => {
  const setSortIcon = (
    label: string,
    sortColumns: SortColumn[]
  ): SemanticICONS => {
    let icon: SemanticICONS = "sort";

    sortColumns.length > 0 &&
      sortColumns.forEach((column: SortColumn) => {
        if (column.name === label) {
          icon = column.direction === "asc" ? "sort up" : "sort down";
        }
      });
    return icon;
  };

  const iconName = setSortIcon(label, sortColumns);

  const iconColor = iconName == "sort" ? "silver" : "black";

  if (exludedColumns && exludedColumns.includes(label)) {
    return <Table.HeaderCell>{label}</Table.HeaderCell>;
  } else {
    return (
      <Table.HeaderCell
        onClick={() => {
          handleSort("update", label, sortColumns);
        }}
      >
        <span>{label}</span>
        <Icon name={iconName} style={{ color: iconColor }} />
      </Table.HeaderCell>
    );
  }
};
