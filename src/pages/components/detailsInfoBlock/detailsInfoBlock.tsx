import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { CheckFilter } from "../checkfilter/checkfilter";
import { useFilterIsActive } from "../../../hooks";

export interface Props {
  resultsCount: number;
  category: string;
}

export const DetailsInfoBlock: FC<Props> = ({ resultsCount, category }) => {
  const [isActive] = useFilterIsActive();

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
          <CheckFilter disabled={true} />
        </>
      )}
    </>
  );
};
