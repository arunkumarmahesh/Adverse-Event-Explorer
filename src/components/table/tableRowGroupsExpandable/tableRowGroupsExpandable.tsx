import React, { FC, useState, MouseEvent } from "react";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TableCellAccordion, CellPopup, TableRowGroups } from "../..";
import { GroupedValue } from "../../../types";

export interface Props {
  index: number;
  colors: string[];
  data: any;
}

export const TableRowGroupsExpandable: FC<Props> = ({
  index,
  colors,
  data
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // console.log("TableRowGroupsExpandable data", data);

  const handleClick = (
    e: MouseEvent<HTMLDivElement>,
    titleProps: any // TableCellAccordionProps
  ) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <Table.Row>
        <TableCellAccordion
          style={{ width: "120px" }}
          title={data.name}
          index={index}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        {data.groups.map((group: any, key: number) => {
          return (
            <CellPopup key={key} content={`${group.value}/${group.total}`}>
              <Table.Cell style={{ color: colors[key] }}>
                {group.percentage}
              </Table.Cell>
            </CellPopup>
          );
        })}
      </Table.Row>
      {activeIndex === index &&
        data.subCategories.map((data: any, key: number) => (
          <TableRowGroups key={key} data={data} />
        ))}
    </>
  );
};
