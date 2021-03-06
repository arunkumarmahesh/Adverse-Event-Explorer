import React, { FC, HTMLAttributes, ReactText } from "react";
import uuid from "uuid/v4";
import { Table } from "semantic-ui-react";
import * as t from "../../../types";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  datas: t.Data[];
}

export const TableBodyDetails: FC<Props> = ({ datas, ...rest }) => {
  return (
    <Table.Body {...rest}>
      {datas.length >= 1 ? (
        datas.map((item: t.Data) => {
          return (
            <Table.Row key={uuid()}>
              {Object.values(item).map((entry: ReactText) => (
                <Table.Cell key={uuid()} style={{ whiteSpace: "nowrap" }}>
                  <div>{entry}</div>
                </Table.Cell>
              ))}
            </Table.Row>
          );
        })
      ) : (
        <Table.Row>
          <Table.Cell colSpan="4">No data selected.</Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  );
};
