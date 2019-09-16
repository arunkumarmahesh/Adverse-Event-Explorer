import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import { CellPopup } from "../..";

export interface Props {
  data: any;
  colors: any;
}

export const TableRowGroups: FC<Props> = ({ data, colors }) => {
  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>
        <Link
          to={`/${data.name.replace(/<\/?[^>]+(>|$)/g, "")}`}
          dangerouslySetInnerHTML={{ __html: data.name }}
        />
      </Table.Cell>
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
