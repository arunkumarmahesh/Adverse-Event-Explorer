import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { CheckFilter } from "../checkfilter/checkfilter";
import { SummarizeBy } from "../summarizeBy/summarizeBy";
import { GroupBy } from "../groupBy/groupBy";
import { SearchBy } from "../searchBy/searchBy";
import { HeaderGroups } from "../../../types";
import _ from "lodash";
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
  const dispatch = useDispatch();

  return (
    <div>
      <div className="filter">
        <SummarizeBy />
        <GroupBy currentBodyGroups={currentBodyGroups} />
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
