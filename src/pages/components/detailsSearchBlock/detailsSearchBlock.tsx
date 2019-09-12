import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Button } from "semantic-ui-react";
import { AppState } from "../../../types";
import { SET_DETAIL_SEARCH } from "../../../store/constants";

export interface Props {
  resultsTotal: number;
  resultsSearched: number;
}

export const DetailsSearchBlock: FC<Props> = ({
  resultsTotal,
  resultsSearched
}) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: AppState) => state.detailSearch);

  const handleSearch = (e: any) => {
    if (e.currentTarget.value.length >= 2) {
      dispatch({
        type: SET_DETAIL_SEARCH,
        payload: e.currentTarget.value
      });
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "start", alignItems: "center" }}
    >
      <Search
        onSearchChange={handleSearch}
        showNoResults={false}
        value={searchTerm}
      />
      <Button
        onClick={() => {
          dispatch({
            type: SET_DETAIL_SEARCH,
            payload: ""
          });
        }}
      >
        Delete Search
      </Button>
      <b>{`${resultsSearched}/${resultsTotal} records displayed`}</b>
    </div>
  );
};
