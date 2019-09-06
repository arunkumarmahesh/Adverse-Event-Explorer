import React, { FC } from "react";
import { Table, Accordion, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  title: string;
  index: number;
  activeIndex: number;
  handleClick: any;
}

export const TableCellAccordion: FC<Props> = ({
  title,
  index,
  activeIndex,
  handleClick
}) => {
  return (
    <Table.Cell>
      <Accordion>
        <Accordion.Title
          active={activeIndex === index}
          index={index}
          onClick={handleClick}
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Icon name="dropdown" />
          <div style={{ width: "150px" }}>{title}</div>
        </Accordion.Title>
      </Accordion>
    </Table.Cell>
  );
};