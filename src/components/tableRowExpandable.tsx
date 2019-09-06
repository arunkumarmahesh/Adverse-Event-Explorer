import React, { FC, useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import {
  TableCellAccordion,
  Props as TableCellAccordionProps
} from "./tableCellAccordion";
import { TableCellPercentage } from "./tableCellPercentage";
import { TableRow } from "./tableRow";
import { useBodySubGroups } from "../hooks/useBodySubGroups";
import "semantic-ui-css/semantic.min.css";
import { Groups, AppState } from "../utils/types";

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
  const colors = useSelector((state: AppState) => state.colors);
  const bodySubGroups = useBodySubGroups(data[0], headerGroups);

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
        {Object.entries(data[1]).map((value: any, key: number) => (
          <TableCellPercentage
            key={key}
            partialCount={value[1]}
            totalCount={headerGroups[value[0]]}
            style={{ color: colors[key] }}
          />
        ))}
        <TableCellPercentage
          partialCount={_(data[1])
            .map()
            .sum()}
          totalCount={headerGroupsTotal}
        />
        <Table.Cell />
        <Table.Cell>
          <span>details</span>
        </Table.Cell>
      </Table.Row>
      {activeIndex === index &&
        Object.entries(bodySubGroups).map((data, key) => (
          <TableRow
            key={key}
            data={data}
            headerGroups={headerGroups}
            headerGroupsTotal={headerGroupsTotal}
          />
        ))}
    </>
  );
};
