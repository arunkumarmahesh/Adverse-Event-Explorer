import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import { TableRowGroupsExpandable } from "../..";
import { GroupedDatas, GroupedValues } from "../../../types";
import _ from "lodash";

export interface Props {
  colors: string[];
  groupedTotal: GroupedValues;
  groupedDatas: GroupedDatas;
}

export const TableBodyGroups: FC<Props> = ({
  colors,
  groupedDatas,
  groupedTotal
}) => (
  <Table.Body>
    {Object.entries(groupedDatas).map((data, key) => {
      console.log("tableBodyGroups data[0]", data[0]);
      // add zero values to dataset
      const filledDatas = {
        ..._.mapValues(groupedTotal.groups, () => 0),
        ...data[1]
      };

      console.log("filledDatas", filledDatas);

      if (data[0]) {
        return (
          <TableRowGroupsExpandable
            key={key}
            colors={colors}
            index={key}
            data={data}
            groupedTotal={groupedTotal}
          />
        );
      }
    })}
  </Table.Body>
);
