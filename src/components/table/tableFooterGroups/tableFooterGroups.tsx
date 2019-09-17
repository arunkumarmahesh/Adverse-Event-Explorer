import React, { FC, HTMLAttributes } from "react";
import { Table } from "semantic-ui-react";
import { GroupedValue } from "../../../types";
import { CellPopup } from "../../notifications/cellPopup/cellPopup";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  colors: string[];
  groups: GroupedValue[];
}

export const TableFooterGroups: FC<Props> = ({ colors, groups, ...rest }) => {
  return (
    <Table.Header {...rest}>
      <Table.Row>
        <Table.HeaderCell textAlign="center" style={{ width: "200px" }}>
          All
        </Table.HeaderCell>
        {groups.map((group, key) => (
          <CellPopup key={group.name} content={`${group.value}/${group.total}`}>
            <Table.HeaderCell style={{ color: colors[key] }}>
              {`${group.percentage}%`}
            </Table.HeaderCell>
          </CellPopup>
        ))}
        <Table.HeaderCell textAlign="center"></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
