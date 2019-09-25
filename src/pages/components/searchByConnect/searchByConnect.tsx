import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../types";
import { setSearchTerm } from "../../../store/actions";
import { SearchBlock } from "../../../components";

export interface Props {
  resultsCount: number;
}

export const SearchByConnect: FC<Props> = ({ resultsCount }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: AppState) => state.searchTerm);

  return (
    <SearchBlock
      label="Search by categories:"
      resultText={`${resultsCount} matches`}
      searchTerm={searchTerm}
      dispatch={dispatch}
      setSearchTerm={setSearchTerm}
    />
  );
};
