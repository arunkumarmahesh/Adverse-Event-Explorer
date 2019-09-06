import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import { TableHeader } from "./src/components/tableHeader";
import { TableRowExpandable } from "./src/components/tableRowExpandable";

export interface Props {
  groups: any;
  groupsTotal: any;
  aebodsySorted: any;
  colors: any;
  groupsHeighestValue: any;
  groupVariable: any;
  subGroupVariable: any;
}

export const GroupedTable: FC<Props> = ({
  groups,
  groupsTotal,
  aebodsySorted,
  colors,
  groupsHeighestValue,
  groupVariable,
  subGroupVariable
}) => {
  return (
    <Table>
      <TableHeader groups={groups} groupsTotal={groupsTotal} colors={colors} />
      <Table.Body>
        {Object.entries(aebodsySorted).map((data, key) => (
          <TableRowExpandable
            key={key}
            index={key}
            data={data}
            groups={groups}
            groupsTotal={groupsTotal}
            groupsHeighestValue={groupsHeighestValue}
            groupVariable={groupVariable}
            subGroupVariable={subGroupVariable}
            colors={colors}
          />
        ))}
      </Table.Body>
    </Table>
  );
};
