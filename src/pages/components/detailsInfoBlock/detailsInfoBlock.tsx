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

  console.log("isActive", isActive);

  return (
    <>
      <Link to="/">back</Link>
      <div>
        <strong>{`Details for ${resultsCount} ${category} records`}</strong>
      </div>
      <div>The Listing is filtered as shown</div>
      {isActive && <CheckFilter disabled={true} />}
    </>
  );
};
