import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import { TableRowGroupsExpandable } from "../../../components";

export interface Props {
  colors: string[];
  groups: any;
}

export const TableBodyGroups: FC<Props> = ({ colors, groups }) => {
  return (
    <Table.Body>
      {groups.map((data: any) => {
        if (data.name[0]) {
          return (
            <TableRowGroupsExpandable
              key={data.name}
              colors={colors}
              data={data}
            />
          );
        }
        return null;
      })}
    </Table.Body>
  );
};
