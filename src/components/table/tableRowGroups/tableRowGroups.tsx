import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { formatUrl } from "../../../utils/helpers/formatUrl";
import { CellPopup } from "../..";

export interface Props {
  data: any;
  colors: string[];
}

export const TableRowGroups: FC<Props> = ({ data, colors }) => {
  return (
    <Table.Row style={{ background: "#efefef" }}>
      <Table.Cell style={{ paddingLeft: "35px" }}>
        <Link
          to={formatUrl(data.name)}
          dangerouslySetInnerHTML={{ __html: data.name }}
        />
      </Table.Cell>
      {data.groups.map((group: any, key: number) => (
        <CellPopup key={group.name} content={`${group.value}/${group.total}`}>
          <Table.Cell style={{ color: colors[key] }} textAlign="center">
            {`${group.percentage}%`}
          </Table.Cell>
        </CellPopup>
      ))}

      <Table.Cell />
      <Table.Cell />
    </Table.Row>
  );
};
