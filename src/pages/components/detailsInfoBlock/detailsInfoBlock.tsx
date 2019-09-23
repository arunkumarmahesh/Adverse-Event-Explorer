import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { CheckFilter } from "../checkfilter/checkfilter";
import { useFilterIsActive } from "../../../hooks";
import { AppState } from "../../../types";

export interface Props {
  resultsCount: number;
  category: string;
}

export const DetailsInfoBlock: FC<Props> = ({ resultsCount, category }) => {
  const [isActive] = useFilterIsActive();
  const ageFilterSelected = useSelector(
    (state: AppState) => state.ageFilterSelected
  );

  console.log("ageFilterSelected", ageFilterSelected);
  return (
    <>
      <Link to="/">
        <Button icon labelPosition="left">
          <Icon name="chevron left" />
          Return to summary view
        </Button>
      </Link>
      <div>
        <strong>{`Details for ${resultsCount} ${category} records`}</strong>
      </div>
      {isActive && (
        <>
          <div>The Listing is filtered as shown:</div>
          <div>
            Age filter:{" "}
            <span>{`${ageFilterSelected![0]}- ${ageFilterSelected![1]}`}</span>
          </div>
          <CheckFilter disabled={true} />
        </>
      )}
    </>
  );
};
