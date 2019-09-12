import React, { FC, HTMLAttributes } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../../../types";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  partialCount: number;
  totalCount: number;
}

export const TableHeaderCellPercentage: FC<Props> = ({
  partialCount,
  totalCount,
  ...rest
}) => {
  const computePercentage = (part: number, total: number) => {
    return total > 0 ? `${((part / total) * 100).toFixed(1)}%` : "0%";
  };

  return (
    <Table.HeaderCell textAlign="center" {...rest}>
      {computePercentage(partialCount, totalCount)}
    </Table.HeaderCell>
  );
};
