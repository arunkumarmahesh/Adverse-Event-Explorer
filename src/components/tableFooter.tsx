import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../types";
import { TableHeaderCellPercentage } from "./tableHeaderCellPercentage";

export const TableFooter: FC = () => {
  const colors = useSelector((state: AppState) => state.colors);
  const footerValues = useSelector((state: AppState) => state.footerValues);

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          textAlign="center"
          colSpan="2"
          style={{ width: "200px" }}
        >
          All
        </Table.HeaderCell>
        {Object.entries(footerValues.groups).map((value, key) => (
          <TableHeaderCellPercentage
            key={key}
            partialCount={value[1]}
            style={{ color: colors[key] }}
          />
        ))}
        <TableHeaderCellPercentage partialCount={footerValues.total} />
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
