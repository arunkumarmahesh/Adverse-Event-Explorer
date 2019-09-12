import React, { FC, HTMLAttributes } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import * as t from "../../../types";

import { TableHeaderCellPercentage } from "../tableHeaderCellPercentage/tableHeaderCellPercentage";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  colors: string[];
  totalCount: number;
  values: t.GroupedValues;
}

export const TableFooterGroups: FC<Props> = ({
  colors,
  values,
  totalCount,
  ...rest
}) => {
  return (
    <Table.Header {...rest}>
      <Table.Row>
        <Table.HeaderCell
          textAlign="center"
          colSpan="2"
          style={{ width: "200px" }}
        >
          All
        </Table.HeaderCell>
        {Object.entries(values.groups).map((value, key) => (
          <TableHeaderCellPercentage
            key={key}
            partialCount={value[1]}
            totalCount={totalCount}
            style={{ color: colors[key] }}
          />
        ))}
        <TableHeaderCellPercentage
          partialCount={values.total}
          totalCount={totalCount}
        />
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
