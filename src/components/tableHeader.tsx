import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../types";

export const TableHeader: FC = () => {
  const colors = useSelector((state: AppState) => state.colors);
  const headerValues = useSelector((state: AppState) => state.headerValues);
  const groupSize = _.size(headerValues.groups) + 1;

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
        {Object.entries(headerValues.groups).map((data, key) => (
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
          n={headerValues.total}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
