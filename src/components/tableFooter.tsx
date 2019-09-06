import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import { CellPopup } from "./cellPopup";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../utils/types";

export interface Props {
  groups: { [key: string]: number };
  total: number;
}

export const TableFooter: FC<Props> = ({ groups, total }) => {
  const colors = useSelector((state: AppState) => state.colors);

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center" style={{ width: "200px" }}>
          All
        </Table.HeaderCell>
        {Object.entries(groups).map((data, key) => (
          <CellPopup content={total}>
            <Table.HeaderCell
              key={data[0]}
              style={{ color: colors[key] }}
              textAlign="center"
            >
              100%
            </Table.HeaderCell>
          </CellPopup>
        ))}
        <Table.HeaderCell textAlign="center">100%</Table.HeaderCell>
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
