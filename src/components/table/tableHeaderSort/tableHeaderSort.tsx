import React, { FC, HTMLAttributes } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import * as t from "../../../types";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  multiSort?: t.DetailSortItem[];
  headerTopics: string[];
  handleSort: (method: string, clickedColumn: string) => void;
}

export const TableHeaderSort: FC<Props> = ({
  multiSort,
  headerTopics,
  handleSort,
  ...rest
}) => {
  const setSortIcon = (
    item: string
  ): "ascending" | "descending" | undefined => {
    const sortItemIndex = _.findIndex(multiSort, { name: item });
    if (multiSort && sortItemIndex !== -1) {
      return multiSort[sortItemIndex].direction === "asc"
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
                handleSort("update", item);
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
