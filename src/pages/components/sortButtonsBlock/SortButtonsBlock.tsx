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

export const SortButtonsBlock: FC<Props> = ({ sortColumns, handleSort }) => {
  return <SortButtons sortColumns={sortColumns} handleSort={handleSort} />;
};
