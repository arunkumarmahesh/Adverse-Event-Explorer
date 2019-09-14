import React, { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Table, Accordion, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export interface Props extends HTMLAttributes<HTMLTableCellElement> {
  title: string;
  index: string[];
  handleExpand: any;
}

export const TableCellAccordion: FC<Props> = ({
  title,
  index,
  handleExpand,
  ...rest
}) => {
  // console.log("TableCellAccordion", activeIndex.includes(title));

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
            active={index.includes(title)}
            index={title}
            onClick={handleExpand}
          >
            <Icon name="dropdown" />
          </Accordion.Title>
        </Accordion>
        <Link to={`/${title}`}>{title}</Link>
      </div>
    </Table.Cell>
  );
};
