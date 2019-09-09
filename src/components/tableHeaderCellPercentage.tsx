import React, { FC, HTMLAttributes } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { AppState } from "../types";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  partialCount: number;
}

export const TableHeaderCellPercentage: FC<Props> = ({
  partialCount,
  ...rest
}) => {
  const headerValues = useSelector((state: AppState) => state.headerValues);

  const computePercentage = (part: number, total: number) => {
    return total > 0 ? `${((part / total) * 100).toFixed(1)}%` : "0%";
  };

  return (
    <Table.HeaderCell textAlign="center" {...rest}>
      {computePercentage(partialCount, headerValues.total)}
    </Table.HeaderCell>
  );
};
