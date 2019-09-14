import React, { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Table, Accordion, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export interface Props extends HTMLAttributes<HTMLTableCellElement> {
  title: string;
  index: number;
  activeIndex: number;
  handleClick: any;
}

export const TableCellAccordion: FC<Props> = ({
  title,
  index,
  activeIndex,
  handleClick,
  ...rest
}) => {
  return (
    <Table.Cell {...rest}>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Accordion>
          <Accordion.Title
            active={activeIndex === index}
            index={index}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
          </Accordion.Title>
        </Accordion>
        <Link to={`/${title}`}>{title}</Link>
      </div>
    </Table.Cell>
  );
};
