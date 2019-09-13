import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Button, Icon } from "semantic-ui-react";
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
    dispatch({
      type: SET_DETAIL_SEARCH,
      payload: e.currentTarget.value
    });
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
      {searchTerm && searchTerm[1] && (
        <Button
          size="mini"
          icon={true}
          labelPosition="right"
          onClick={() => {
            dispatch({
              type: SET_DETAIL_SEARCH,
              payload: ""
            });
          }}
        >
          <Icon name="close" />
          Delete Search
        </Button>
      )}

      <b>{`${resultsSearched}/${resultsTotal} records displayed`}</b>
    </div>
  );
};
