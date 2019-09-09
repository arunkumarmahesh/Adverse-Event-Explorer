import React, { FC, useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { Table, Icon } from "semantic-ui-react";
import _ from "lodash";
import {
  TableCellAccordion,
  Props as TableCellAccordionProps
} from "./tableCellAccordion";
import { TableCellPercentage } from "./tableCellPercentage";
import { TableRow } from "./tableRow";
import { useSubGroups } from "../hooks/useSubGroups";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../types";
import { CellPopup } from "./cellPopup";
import { Link } from "react-router-dom";

export interface Props {
  index: number;
  data: { [key: string]: any };
}

export const TableRowExpandable: FC<Props> = ({ index, data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const colors = useSelector((state: AppState) => state.colors);
  const bodySubGroups = useSubGroups(data[0]);

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
        {Object.entries(data[1]).map((value: any, key: number) => (
          <TableCellPercentage
            key={key}
            partialCount={value[1]}
            style={{ color: colors[key] }}
          />
        ))}
        <TableCellPercentage
          partialCount={_(data[1])
            .map()
            .sum()}
        />
        <Table.Cell />
      </Table.Row>
      {activeIndex === index &&
        Object.entries(bodySubGroups).map((data, key) => (
          <TableRow key={key} data={data} />
        ))}
    </>
  );
};
