import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../utils/types";
import { useFooterGroups } from "../hooks/useFooterGroups";
import { TableHeaderCellPercentage } from "./tableHeaderCellPercentage";

export interface Props {
  headerGroups: { [key: string]: number };
  total: number;
}

export const TableFooter: FC<Props> = ({ headerGroups, total }) => {
  const colors = useSelector((state: AppState) => state.colors);
  const datas = useSelector((state: AppState) => state.datas);
  const footerGroups = useFooterGroups(datas);

  console.log("footerGroups", footerGroups);
  console.log("headerGroups", headerGroups);

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center" style={{ width: "200px" }}>
          All
        </Table.HeaderCell>
        {Object.entries(footerGroups).map((value, key) => (
          <TableHeaderCellPercentage
            key={key}
            partialCount={value[1]}
            totalCount={headerGroups[1]} // use group total
            style={{ color: colors[key] }}
          />
        ))}
        <TableHeaderCellPercentage
          partialCount={0}
          totalCount={headerGroups[1]}
        />
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
