import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBlock } from "../../../components/controls/searchBlock/searchBlock";
import { Button } from "semantic-ui-react";
import { AppState } from "../../../types";
import { setDetailSearchTerm } from "../../../store/actions";

export interface Props {
  resultsTotal: number;
  resultsSearched: number;
}

export const DetailsSearchBlock: FC<Props> = ({
  resultsTotal,
  resultsSearched
}) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: AppState) => state.detailSearchTerm);

  return (
    <div>
      <SearchBlock
        label="Search by categories:"
        resultText={`${resultsSearched}/${resultsTotal} records displayed`}
        searchTerm={searchTerm}
        dispatch={dispatch}
        setSearchTerm={setDetailSearchTerm}
      />
    </div>
  );
};
