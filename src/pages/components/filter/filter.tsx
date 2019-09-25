import React, { FC } from "react";
import { CheckFilter } from "../checkfilter/checkfilter";
import { SummarizeByConnect } from "../summarizeByConnect/summarizeByConnect";
import { GroupByConnect } from "../groupByConnect/groupByConnect";
import { SearchByConnect } from "../searchByConnect/searchByConnect";
import { HeaderGroups } from "../../../types";
import { FilterAge } from "./filterAge";
import { FilterPrevalence } from "./filterPrevalence";
import { StoreManagerConnect } from "../storeManagerConnect/storeManagerConnect";

export interface Props {
  ageRange: [number, number];
  prevalenceRange: [number, number];
  resultsCount: number;
  headerGroups: HeaderGroups;
  currentBodyGroups: any;
}

export const Filter: FC<Props> = ({
  ageRange,
  prevalenceRange,
  resultsCount,
  headerGroups,
  currentBodyGroups
}) => {
  return (
    <div>
      <div className="filter">
        <SummarizeByConnect />
        <GroupByConnect />
        <SearchByConnect resultsCount={resultsCount} />
      </div>
      <br />

      <FilterAge ageRange={ageRange} />
      <FilterPrevalence
        headerGroups={headerGroups}
        bodyGroups={currentBodyGroups}
        prevalenceRange={prevalenceRange}
      />

      <br />
      <CheckFilter />
      <StoreManagerConnect />
    </div>
  );
};
