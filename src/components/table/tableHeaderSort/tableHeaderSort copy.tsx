import React, { FC, HTMLAttributes } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import * as t from "../../../types";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  sortColumns: t.SortColumn[];
  headerTopics: string[];
  handleSort: (
    method: string,
    clickedColumn: string,
    sortColumns: t.SortColumn[]
  ) => void;
}

export const TableHeaderSort: FC<Props> = ({
  sortColumns,
  headerTopics,
  handleSort,
  ...rest
}) => {
  const setSortIcon = (
    item: string
  ): "ascending" | "descending" | undefined => {
    const sortItemIndex = _.findIndex(sortColumns, { name: item });
    if (sortColumns && sortItemIndex !== -1) {
      return sortColumns[sortItemIndex].direction === "asc"
        ? "ascending"
        : "descending";
    } else {
      return undefined;
    }
  };

  return (
    <Table.Header {...rest}>
      <Table.Row>
        {headerTopics.map((item: string, key: number) => {
          return (
            <Table.HeaderCell
              key={key}
              sorted={setSortIcon(item)}
              onClick={() => {
                handleSort("update", item, sortColumns);
              }}
            >
              {item}
            </Table.HeaderCell>
          );
        })}
      </Table.Row>
    </Table.Header>
  );
};
