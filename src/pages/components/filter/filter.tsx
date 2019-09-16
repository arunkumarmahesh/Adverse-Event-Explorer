import React, { FC } from "react";
import { CheckFilter } from "../checkfilter/checkfilter";
import { SummarizeBy } from "../summarizeBy/summarizeBy";
import { useFilterPrevalence, useFilterAge } from "../../../hooks";
import { SliderBlock } from "../../../components";
import { GroupBy } from "../groupBy/groupBy";
import { SearchBy } from "../searchBy/searchBy";

export interface Props {
  ageRange: [number, number];
  prevalenceRange: [number, number];
  resultsCount: number;
}

export const Filter: FC<Props> = ({
  ageRange,
  prevalenceRange,
  resultsCount
}) => {
  const prevalenceFilterOptions = useFilterPrevalence(prevalenceRange);
  const ageFilterOptions = useFilterAge(ageRange);

  console.log("prevalenceFilterOptions", prevalenceFilterOptions);

  console.log("ageFilterOptions", ageFilterOptions);
  return (
    <div>
      <div className="filter">
        <SummarizeBy />
        <GroupBy />
        <SearchBy resultsCount={resultsCount} />
      </div>
      <br />
      <div>
        <SliderBlock {...prevalenceFilterOptions} />
        <SliderBlock {...ageFilterOptions} />
      </div>
      <br />
      <CheckFilter />
    </div>
  );
};
