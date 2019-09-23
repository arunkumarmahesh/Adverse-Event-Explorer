import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Button, Icon } from "semantic-ui-react";
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

  const handleSearch = (e: any, { value }: any) => {
    dispatch(setDetailSearchTerm(value));
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
            dispatch(dispatch(setDetailSearchTerm("")));
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
