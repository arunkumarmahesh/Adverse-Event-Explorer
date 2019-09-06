import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../utils/types";

export interface Props {
  groups: { [key: string]: number };
  total: number;
}

export const TableHeader: FC<Props> = ({ groups, total }) => {
  const groupSize = _.size(groups) + 1;
  const colors = useSelector((state: AppState) => state.colors);

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          rowSpan="2"
          colSpan="2"
          textAlign="center"
          style={{ width: "200px" }}
        >
          Category
        </Table.HeaderCell>

        <Table.HeaderCell colSpan={groupSize} textAlign="center">
          Groups
        </Table.HeaderCell>
        <Table.HeaderCell rowSpan="2" textAlign="center">
          AE Rate by group
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        {Object.entries(groups).map((data, key) => (
          <Table.HeaderCell
            key={data[0]}
            style={{ color: colors[key] }}
            textAlign="center"
          >
            {data[0]} <br />
            n={data[1]}
          </Table.HeaderCell>
        ))}
        <Table.HeaderCell textAlign="center">
          {"Total"} <br />
          n={total}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
