import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckFilter } from "../checkfilter/checkfilter";
import { SummarizeBy } from "../summarizeBy/summarizeBy";
import { SliderBlock } from "../../../components";
import { GroupBy } from "../groupBy/groupBy";
import { SearchBy } from "../searchBy/searchBy";
import * as c from "../../../store/constants";
import { AppState } from "../../../types";

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
  const dispatch = useDispatch();
  const ageFilterRange = useSelector((state: AppState) => state.ageFilterRange);
  const ageFilterSelected = useSelector(
    (state: AppState) => state.ageFilterSelected
  );
  const prevalenceFilterRange = useSelector(
    (state: AppState) => state.prevalenceFilterRange
  );
  const prevalenceFilterSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );

  if (!ageFilterRange) {
    dispatch({
      type: c.SET_AGE_FILTER_RANGE,
      payload: ageRange
    });
  }

  if (!ageFilterSelected) {
    dispatch({
      type: c.SET_AGE_FILTER_SELECTED,
      payload: ageRange
    });
  }

  // check if prevalence range has changed
  if (!prevalenceFilterRange) {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_RANGE,
      payload: prevalenceRange
    });
  }

  // check if age selected is set
  if (!prevalenceFilterSelected) {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_SELECTED,
      payload: prevalenceRange
    });
  }

  console.log("ageFilterRange", ageFilterRange);
  console.log("ageFilterSelected", ageFilterSelected);
  console.log("prevalenceFilterRange", prevalenceFilterRange);
  console.log("prevalenceFilterSelected", prevalenceFilterSelected);

  const handleAgeChange = (value: [number, number]) => {
    dispatch({
      type: c.SET_AGE_FILTER_SELECTED,
      payload: value
    });
  };

  const handlePrevalenceChange = (value: [number, number]) => {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_SELECTED,
      payload: value
    });
  };

  return (
    <div>
      <div className="filter">
        <SummarizeBy />
        <GroupBy />
        <SearchBy resultsCount={resultsCount} />
      </div>
      <br />
      <div>
        <SliderBlock
          range={ageFilterRange || ageRange}
          selected={ageFilterSelected || ageRange}
          handleChange={handleAgeChange}
        />
        <SliderBlock
          range={prevalenceFilterRange || prevalenceRange}
          selected={prevalenceFilterSelected || prevalenceRange}
          handleChange={handlePrevalenceChange}
        />
      </div>
      <br />
      <CheckFilter />
    </div>
  );
};
