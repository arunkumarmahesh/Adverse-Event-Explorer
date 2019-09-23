import React, { FC } from "react";
import { CheckFilter } from "../checkfilter/checkfilter";
import { SummarizeBy } from "../summarizeBy/summarizeBy";
import { GroupBy } from "../groupBy/groupBy";
import { SearchBy } from "../searchBy/searchBy";
import { HeaderGroups } from "../../../types";
import { FilterAge } from "./filterAge";
import { FilterPrevalence } from "./filterPrevalence";
import { StoreManager } from "../storeManager/storeManager";

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
        <SummarizeBy />
        <GroupBy />
        <SearchBy resultsCount={resultsCount} />
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
      <StoreManager />
    </div>
  );
};
