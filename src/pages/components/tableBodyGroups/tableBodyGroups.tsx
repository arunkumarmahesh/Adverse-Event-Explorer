import React, { FC, MouseEvent } from "react";
import { Table } from "semantic-ui-react";
import { TableRowGroupsExpandable } from "../../../components";
import _ from "lodash";

export interface Props {
  colors: string[];
  groups: any;
}

export const TableBodyGroups: FC<Props> = ({ colors, groups }) => {
  return (
    <Table.Body>
      {groups.map((data: any, key: any) => {
        if (data.name[0]) {
          return (
            <TableRowGroupsExpandable key={key} colors={colors} data={data} />
          );
        }
      })}
    </Table.Body>
  );
};