import React, { FC, HTMLAttributes } from "react";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  totalCount: number;
  partialCount: number;
}

export const TableCellPercentage: FC<Props> = ({
  partialCount,
  totalCount,
  ...rest
}) => {
  const computePercentage = (part: number, total: number) => {
    return `${((part / total) * 100).toFixed(1)}%`;
  };

  return (
    <Table.Cell {...rest}>
      {computePercentage(partialCount, totalCount)}
    </Table.Cell>
  );
};
/* <Table.Cell>{computePercentage(data[1], armEvents[data[0]])}</Table.Cell> */
