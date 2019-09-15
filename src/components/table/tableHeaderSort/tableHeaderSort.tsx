import React, { FC, HTMLAttributes } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import { TableHeaderCellSort } from "../..";
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
  return (
    <Table.Header {...rest}>
      <Table.Row>
        {headerTopics.map((item: string, key: number) => {
          return (
            <TableHeaderCellSort
              key={key}
              currentColumnName={item}
              sortColumns={sortColumns}
              handleSort={() => {
                handleSort("update", item, sortColumns);
              }}
            >
              {item}
            </TableHeaderCellSort>
          );
        })}
      </Table.Row>
    </Table.Header>
  );
};
