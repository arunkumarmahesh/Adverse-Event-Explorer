import React, { FC, useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {
  TableCellAccordion,
  TableCellPercentage,
  CellPopup,
  TableRowGroups
} from "../..";
import { useSubGroups } from "../../../hooks";
import { GroupedValues } from "../../../types";

export interface Props {
  index: number;
  colors: string[];
  data: { [key: string]: any };
  groupedTotal: GroupedValues;
}

export const TableRowGroupsExpandable: FC<Props> = ({
  index,
  colors,
  data,
  groupedTotal
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const bodySubGroups = useSubGroups(data[0]);

  const handleClick = (
    e: MouseEvent<HTMLDivElement>,
    titleProps: any // TableCellAccordionProps
  ) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  console.log("expandebla data", data);

  const filledData = {
    ..._.mapValues(groupedTotal.groups, () => 0),
    ...data[1]
  };
  return (
    <>
      <Table.Row>
        <TableCellAccordion
          style={{ width: "120px" }}
          title={data[0]}
          index={index}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        <Table.Cell style={{ maxWidth: "50px", padding: "0px" }}>
          <CellPopup content="details view">
            <Link to={`/${data[0]}`}>
              <Icon name="users" />
            </Link>
          </CellPopup>
        </Table.Cell>
        {Object.entries(filledData).map((value: any, key: number) => (
          <TableCellPercentage
            key={key}
            partialCount={value[1]}
            totalCount={groupedTotal.groups[value[0]]}
            style={{ color: colors[key] }}
          />
        ))}
        <TableCellPercentage
          partialCount={_(data[1])
            .map()
            .sum()}
          totalCount={groupedTotal.total}
        />
        <Table.Cell />
      </Table.Row>
      {activeIndex === index &&
        Object.entries(bodySubGroups).map((data, key) => (
          <TableRowGroups
            key={key}
            data={data}
            totalCount={groupedTotal.total}
          />
        ))}
    </>
  );
};
