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
}

export const Filter: FC<Props> = ({ ageRange, prevalenceRange }) => {
  const prevalenceFilterOptions = useFilterPrevalence(prevalenceRange);
  const ageFilterOptions = useFilterAge();

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
