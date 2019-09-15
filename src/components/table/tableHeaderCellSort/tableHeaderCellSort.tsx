import React, { FC, ReactNode } from "react";
import { Table, Icon, SemanticICONS } from "semantic-ui-react";
import { SortColumn } from "../../../types";

export interface Props {
  currentColumnName: string;
  children: ReactNode | string;
  sortColumns: SortColumn[];
  exludedColumns?: string[];
  color?: string;
  handleSort: (
    method: string,
    clickedColumn: string,
    sortColumns: SortColumn[]
  ) => void;
}

export const TableHeaderCellSort: FC<Props> = ({
  currentColumnName,
  sortColumns,
  exludedColumns,
  color,
  handleSort,
  children
}) => {
  const setSortIcon = (
    index: string,
    sortColumns: SortColumn[]
  ): SemanticICONS => {
    let icon: SemanticICONS = "sort";

    sortColumns.length > 0 &&
      sortColumns.forEach((column: SortColumn) => {
        if (column.name === index) {
          icon = column.direction === "asc" ? "sort up" : "sort down";
        }
      });
    return icon;
  };

  const iconName = setSortIcon(currentColumnName, sortColumns);

  const iconColor = iconName == "sort" ? "silver" : "black";

  if (exludedColumns && exludedColumns.includes(currentColumnName)) {
    return (
      <Table.HeaderCell style={{ color: color || "inherit" }}>
        {children}
      </Table.HeaderCell>
    );
  } else {
    return (
      <Table.HeaderCell
        onClick={() => {
          handleSort("update", currentColumnName, sortColumns);
        }}
        style={{
          cursor: "pointer"
        }}
      >
        <div style={{ color: color || "inherit" }}>{children}</div>
        <Icon name={iconName} style={{ color: iconColor }} />
      </Table.HeaderCell>
    );
  }
};
