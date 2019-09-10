import React, { FC, HTMLAttributes, ReactText } from "react";
import { Table } from "semantic-ui-react";
import * as t from "../../../types";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  datas: t.Data[];
}

export const TableBodyDetails: FC<Props> = ({ datas, ...rest }) => {
  return (
    <Table.Body {...rest}>
      {datas.length >= 1 ? (
        datas.map((item: t.Data, key: number) => (
          <Table.Row key={key}>
            {Object.values(item).map((entry: ReactText, key: number) => (
              <Table.Cell key={key}>
                <div>{entry}</div>
              </Table.Cell>
            ))}
          </Table.Row>
        ))
      ) : (
        <Table.Row>
          <Table.Cell colSpan="4">No data selected.</Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  );
};
