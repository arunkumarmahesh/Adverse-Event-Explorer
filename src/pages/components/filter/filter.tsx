import React, { FC } from "react";
import { CheckFilter } from "../checkfilter/checkfilter";
import { SummarizeBy } from "../summarizeBy/summarizeBy";
import { usePrevalenceFilter, useAgeFilter } from "../../../hooks";
import { SliderBlock } from "../../../components";
import { GroupBy } from "../groupBy/groupBy";
import { SearchBy } from "../searchBy/searchBy";

export interface Props {}

export const Filter: FC<Props> = () => {
  const prevalenceFilterOptions = usePrevalenceFilter();
  const ageFilterOptions = useAgeFilter();

  return (
    <div>
      <div className="filter">
        <SummarizeBy />
        <GroupBy />
        <SearchBy />
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
