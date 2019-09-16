import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Button, Icon } from "semantic-ui-react";
import { AppState } from "../../../types";
import { SET_SEARCH_TERM } from "../../../store/constants";

export interface Props {
  resultsCount: number;
}

export const SearchBy: FC<Props> = ({ resultsCount }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: AppState) => state.searchTerm);

  const handleSearch = (e: any) => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: e.currentTarget.value
    });
  };

  return (
    <div>
      <div>Search by category:</div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center"
        }}
      >
        <Search
          onSearchChange={handleSearch}
          showNoResults={false}
          value={searchTerm}
        />
        {searchTerm && searchTerm[1] && (
          <Button
            basic={true}
            size="mini"
            icon={true}
            labelPosition="right"
            onClick={() => {
              dispatch({
                type: SET_SEARCH_TERM,
                payload: ""
              });
            }}
          >
            <Icon name="close" />
            {`${resultsCount} matches`}
          </Button>
        )}
      </div>
    </div>
  );
};
