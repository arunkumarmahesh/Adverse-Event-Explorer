import React, { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Table, Accordion } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export interface Props extends HTMLAttributes<HTMLTableCellElement> {
  title: string;
  index: string[];
  expandAll: boolean;
  handleExpand: any;
}

export const TableCellAccordion: FC<Props> = ({
  title,
  index,
  expandAll,
  handleExpand,
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
            active={index.includes(title)}
            index={title}
            onClick={expandAll ? null : handleExpand}
            icon={expandAll ? "genderless" : "dropdown"}
          ></Accordion.Title>
        </Accordion>
        <Link
          to={`/${title.replace(/<\/?[^>]+(>|$)/g, "")}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </Table.Cell>
  );
};
