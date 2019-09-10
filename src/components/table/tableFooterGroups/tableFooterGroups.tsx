import React, { FC, HTMLAttributes } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import * as t from "../../../types";

import { TableHeaderCellPercentage } from "../../tableHeaderCellPercentage";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  colors: string[];
  values: t.GroupedValues;
}

export const TableFooterGroups: FC<Props> = ({ ...rest }) => {
  const colors = useSelector((state: t.AppState) => state.colors);
  const values = useSelector((state: t.AppState) => state.footerValues);

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
            style={{ color: colors[key] }}
          />
        ))}
        <TableHeaderCellPercentage partialCount={values.total} />
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
