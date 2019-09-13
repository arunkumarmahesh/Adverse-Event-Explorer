import React, { FC } from "react";
import { SortButtons } from "../../../components";
import { DetailSortItem } from "../../../types";

export interface Props {
  sortItems: DetailSortItem[];
  handleSort: (
    method: string,
    column: string,
    sortItems?: DetailSortItem[]
  ) => void;
}

export const DetailsSortBlock: FC<Props> = ({ sortItems, handleSort }) => {
  return (
    <>
      {sortItems.length > 0 ? (
        <SortButtons sortItems={sortItems} handleSort={handleSort} />
      ) : (
        <b>Click column headers to sort.</b>
      )}
    </>
  );
};
