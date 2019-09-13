import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import { TableRowGroupsExpandable } from "../..";
import { GroupedDatas } from "../../../types";
import _ from "lodash";

export interface Props {
  colors: string[];
  groups: any;
}

export const TableBodyGroups: FC<Props> = ({ colors, groups }) => (
  <Table.Body>
    {groups.map((data: any, key: any) => {
      if (data.name[0]) {
        return (
          <TableRowGroupsExpandable
            key={key}
            colors={colors}
            index={key}
            data={data}
          />
        );
      }
    })}
  </Table.Body>
);
