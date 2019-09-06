import React, { FC, useState, MouseEvent } from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import {
  TableCellAccordion,
  Props as TableCellAccordionProps
} from "./tableCellAccordion";
import { TableCellPercentage } from "./tableCellPercentage";
import { TableCellBar } from "./tableCellBar";
import { TableRow } from "./tableRow";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  index: number;
  data: any;
  groups: { [key: string]: number };
  groupsTotal: number;
  groupsHeighestValue: number;
  groupVariable: string;
  subGroupVariable: string;
  colors: string[];
}

export const TableRowExpandable: FC<Props> = ({
  index,
  data,
  groups,
  groupsTotal,
  groupsHeighestValue,
  groupVariable,
  subGroupVariable,
  colors
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (
    e: MouseEvent<HTMLDivElement>,
    titleProps: TableCellAccordionProps
  ) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  // COMPUTE GROUP VALUES
  // 1. set values of groups to 0
  const groupsZero = _.mapValues(groups, () => 0);
  // 2. count available groups
  const groupsCounted = _.countBy(data[1], groupVariable);
  // 3. merge groups to have for every group a value even if it is 0
  const groupsMerged = { ...groupsZero, ...groupsCounted };

  const subGroups = _.groupBy(data[1], subGroupVariable);
  const subGroupsSorted: { [key: string]: {} } = {};
  _(subGroups)
    .keys()
    .sort()
    .each(function(key) {
      subGroupsSorted[key] = subGroups[key];
    });

  return (
    <>
      <Table.Row>
        <TableCellAccordion
          title={data[0]}
          index={index}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        {Object.entries(groupsMerged).map((data, key) => (
          <TableCellPercentage
            key={key}
            partialCount={data[1]}
            totalCount={groups[data[0]]}
            style={{ color: colors[key] }}
          />
        ))}
        <TableCellPercentage
          partialCount={_.size(data[1])}
          totalCount={groupsTotal}
          style={{ color: colors[3] }}
        />
        <TableCellBar
          data={groupsMerged}
          groupsTotal={groupsTotal}
          groupsHeighestValue={groupsHeighestValue}
        />
        <Table.Cell>
          <a href="#">details</a>
        </Table.Cell>
      </Table.Row>
      {activeIndex === index &&
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
        ))}
    </>
  );
};
