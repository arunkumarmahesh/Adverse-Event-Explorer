import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { CheckFilter } from "../checkfilter/checkfilter";
import { SummarizeBy } from "../summarizeBy/summarizeBy";
import { useFilterPrevalence, useFilterAge } from "../../../hooks";
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

  // check if age range has changed
  if (!_.isEqual(ageRange, ageFilterRange)) {
    console.log("ä");
    dispatch({
      type: c.SET_AGE_FILTER_RANGE,
      payload: ageRange
    });
    // check if age selected is set
    if (!_.isEqual(ageFilterSelected, [0, 0])) {
      dispatch({
        type: c.SET_AGE_FILTER_SELECTED,
        payload: ageRange
      });
    }
  }

  // check if prevalence range has changed
  if (!_.isEqual(prevalenceRange, prevalenceFilterRange)) {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_RANGE,
      payload: prevalenceRange
    });
    // check if age selected is set
    if (!_.isEqual(ageFilterSelected, [0, 0])) {
      dispatch({
        type: c.SET_PREVALENCE_FILTER_SELECTED,
        payload: prevalenceRange
      });
    }
  }

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
          range={ageRange}
          selected={ageRange}
          handleChange={handleAgeChange}
        />
        <SliderBlock
          range={prevalenceRange}
          selected={prevalenceRange}
          handleChange={handlePrevalenceChange}
        />
      </div>
      <br />
      <CheckFilter />
    </div>
  );
};
