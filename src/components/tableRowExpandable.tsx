import React, { FC, useState, MouseEvent } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import {
  TableCellAccordion,
  Props as TableCellAccordionProps
} from "./tableCellAccordion";
import { TableCellPercentage } from "./tableCellPercentage";
import "semantic-ui-css/semantic.min.css";
import { Groups } from "../utils/types";

const colors = ["green", "red", "blue", "orange"];

export interface Props {
  index: number;
  data: { [key: string]: any };
  headerGroups: Groups;
  headerGroupsTotal: number;
}

export const TableRowExpandable: FC<Props> = ({
  index,
  data,
  headerGroups,
  headerGroupsTotal
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (
    e: MouseEvent<HTMLDivElement>,
    titleProps: TableCellAccordionProps
  ) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <Table.Row>
        <TableCellAccordion
          title={data[0]}
          index={index}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        {Object.entries(data[1]).map((value: any, key: number) => {
          if (data[0] === "Gastrointestinal disorders") {
            console.log("###", value[0], value[1]);
          }

          return (
            <TableCellPercentage
              key={key}
              partialCount={value[1]}
              totalCount={headerGroups[value[0]]}
              style={{ color: colors[key] }}
            />
          );
        })}
        <TableCellPercentage
          partialCount={_(data[1])
            .map()
            .sum()}
          totalCount={headerGroupsTotal}
        />
        <Table.Cell></Table.Cell>
        <Table.Cell>
          <a href="#">details</a>
        </Table.Cell>
      </Table.Row>
      {/*      {activeIndex === index &&
        Object.entries(subGroupsSorted).map((data, key) => (
          <TableRow
            key={key}
            data={data}
            groups={groups}
            groupsTotal={groupsTotal}
            groupsHeighestValue={groupsHeighestValue}
            groupVariable={groupVariable}
            colors={colors}
          />
        ))} */}
    </>
  );
};
