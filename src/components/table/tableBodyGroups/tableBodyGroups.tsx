import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import { TableRowGroupsExpandable } from "../..";
import * as t from "../../../types";

export interface Props {
  colors: string[];
  values: any;
  totalCount: number;
}

export const TableBodyGroups: FC<Props> = ({ colors, values, totalCount }) => (
  <Table.Body>
    {Object.entries(values).map((data, key) => {
      if (data[0]) {
        return (
          <TableRowGroupsExpandable
            key={key}
            colors={colors}
            index={key}
            data={data}
            totalCount={totalCount}
          />
        );
      }
    })}
  </Table.Body>
);
