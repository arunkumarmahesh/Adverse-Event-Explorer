import React, { FC } from "react";
import { SortButtons } from "../../../components";
import { SortColumn } from "../../../types";

export interface Props {
  sortColumns: SortColumn[];
  handleSort: (
    method: string,
    column: string,
    sortColumns: SortColumn[]
  ) => void;
}

export const DetailsSortBlock: FC<Props> = ({ sortColumns, handleSort }) => {
  return (
    <>
      {sortColumns.length > 0 ? (
        <SortButtons sortColumns={sortColumns} handleSort={handleSort} />
      ) : (
        <b>Click column headers to sort.</b>
      )}
    </>
  );
};
