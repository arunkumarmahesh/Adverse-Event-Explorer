import React, { FC, HTMLAttributes } from "react";
import { Table } from "semantic-ui-react";
import { CellPopup } from "./cellPopup";
import "semantic-ui-css/semantic.min.css";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  totalCount: number;
  partialCount: number;
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
    <CellPopup content={`${partialCount}/${totalCount}`}>
      <Table.HeaderCell textAlign="center" {...rest}>
        {computePercentage(partialCount, totalCount)}
      </Table.HeaderCell>
    </CellPopup>
  );
};