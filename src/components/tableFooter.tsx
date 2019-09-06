import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../utils/types";
import { TableHeaderCellPercentage } from "./tableHeaderCellPercentage";

export interface Props {
  footerGroups: { [key: string]: number };
  footerGroupsTotal: number;
  headerGroups: { [key: string]: number };
  headerGroupsTotal: number;
}

export const TableFooter: FC<Props> = ({
  footerGroups,
  footerGroupsTotal,
  headerGroups,
  headerGroupsTotal
}) => {
  const colors = useSelector((state: AppState) => state.colors);

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center" style={{ width: "200px" }}>
          All
        </Table.HeaderCell>
        {Object.entries(footerGroups).map((value, key) => {
          console.log("ö", value);
          console.log("ä", headerGroupsTotal);
          return (
            <TableHeaderCellPercentage
              key={key}
              partialCount={value[1]}
              totalCount={headerGroups[value[0]]}
              style={{ color: colors[key] }}
            />
          );
        })}
        <TableHeaderCellPercentage
          partialCount={footerGroupsTotal}
          totalCount={headerGroupsTotal}
        />
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
