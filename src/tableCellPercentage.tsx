import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  totalCount: number;
  partialCount: number;
}

export const TableCellPercentage: FC<Props> = ({
  partialCount,
  totalCount
}) => {
  const computePercentage = (part: number, total: number) => {
    return `${((part / total) * 100).toFixed(1)}%`;
  };

  return <Table.Cell>{computePercentage(partialCount, totalCount)}</Table.Cell>;
};
/* <Table.Cell>{computePercentage(data[1], armEvents[data[0]])}</Table.Cell> */
