import React, { FC, HTMLAttributes } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import * as t from "../../../types";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  colors: string[];
  values: t.GroupedValues;
}

export const TableHeaderGroups: FC<Props> = ({ colors, values, ...rest }) => {
  const groupSize = _.size(values.groups) + 1;
  return (
    <Table.Header {...rest}>
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
        {Object.entries(values.groups).map((data, key) => (
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
          n={values.total}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
