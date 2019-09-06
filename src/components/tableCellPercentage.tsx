import React, { FC, HTMLAttributes } from "react";
import { Table } from "semantic-ui-react";
import { CellPopup } from "./cellPopup";
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
    <CellPopup content={`${partialCount}/${totalCount}`}>
      <Table.Cell textAlign="center" {...rest}>
        {computePercentage(partialCount, totalCount)}
      </Table.Cell>
    </CellPopup>
  );
};
