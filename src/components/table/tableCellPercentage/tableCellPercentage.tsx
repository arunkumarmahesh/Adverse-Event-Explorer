import React, { FC, HTMLAttributes } from "react";
import { Table } from "semantic-ui-react";
import { CellPopup } from "../../notifications/cellPopup/cellPopup";

export interface Props extends HTMLAttributes<HTMLTableCellElement> {
  partialCount: number;
  totalCount: number;
}

export const TableCellPercentage: FC<Props> = ({
  partialCount,
  totalCount,
  ...rest
}) => {
  const computePercentage = (part: number, total: number) => {
    return total > 0 ? `${((part / total) * 100).toFixed(1)}%` : "0%";
  };

  return (
    <CellPopup content={`${partialCount}/${totalCount}`} {...rest}>
      <Table.Cell textAlign="center" {...rest}>
        {computePercentage(partialCount, totalCount)}
      </Table.Cell>
    </CellPopup>
  );
};
