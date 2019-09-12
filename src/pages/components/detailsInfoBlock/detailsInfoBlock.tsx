import React, { FC } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/">back</Link>
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
