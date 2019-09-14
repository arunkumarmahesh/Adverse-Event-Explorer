import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import { CellPopup } from "../..";
import { AppState } from "../../../types";

export interface Props {
  data: any;
  colors: any;
}

export const TableRowGroups: FC<Props> = ({ data, colors }) => {
  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>{data.name}</Table.Cell>
      {data.groups.map((group: any, key: number) => (
        <CellPopup key={key} content={`${group.value}/${group.total}`}>
          <Table.Cell style={{ color: colors[key] }}>
            {`${group.percentage}%`}
          </Table.Cell>
        </CellPopup>
      ))}

      <Table.Cell />
      <Table.Cell />
    </Table.Row>
  );
};
