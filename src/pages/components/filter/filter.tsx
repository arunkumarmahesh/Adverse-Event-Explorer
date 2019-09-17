import React, { FC, SyntheticEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "semantic-ui-react";
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
  headerGroups: any;
}

export const Filter: FC<Props> = ({
  ageRange,
  prevalenceRange,
  resultsCount,
  headerGroups
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
  const prevalenceFilterGroup = useSelector(
    (state: AppState) => state.prevalenceFilterGroup
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

  console.log("prevalenceFilterRange", prevalenceFilterRange);
  if (!prevalenceFilterRange) {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_RANGE,
      payload: prevalenceRange
    });
  }

  if (!prevalenceFilterSelected) {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_SELECTED,
      payload: prevalenceRange
    });
  }

  const handleAgeChange = (value: [number, number]) => {
    dispatch({
      type: c.SET_AGE_FILTER_SELECTED,
      payload: value
    });
  };

  const handlePrevalenceFilterChange = (value: [number, number]) => {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_SELECTED,
      payload: value
    });
  };

  const handlePrevalenceFilterGroupChange = (
    e: SyntheticEvent<HTMLElement>,
    { value }: any
  ) => {
    dispatch({
      type: c.SET_PREVALENCE_FILTER_GROUP,
      payload: value
    });
  };

  const generatePrevalenceOptions = (headerGroups: any) => {
    let options = [];
    headerGroups.forEach((value: any) => {
      if (value.name !== "Screen Failure") {
        options.push({
          key: value.name,
          value: value.name,
          text: value.name
        });
      }
    });
    options.unshift({ key: "All", value: "highestPrevalence", text: "All" });
    return options;
  };

  console.log(
    "generatePrevalenceOptions(headerGroups)",
    generatePrevalenceOptions(headerGroups)
  );
  console.log("prevalenceFilterGroup", prevalenceFilterGroup);
  return (
    <div>
      <div className="filter">
        <SummarizeBy />
        <GroupBy />
        <SearchBy resultsCount={resultsCount} />
      </div>
      <br />
      <div>
        <b>Filter by age:</b>
        <SliderBlock
          range={ageFilterRange || ageRange}
          selected={ageFilterSelected || ageRange}
          handleChange={handleAgeChange}
        />
        <b>Filter by prevalence:</b>
        <Select
          options={generatePrevalenceOptions(headerGroups)}
          value={prevalenceFilterGroup}
          onChange={handlePrevalenceFilterGroupChange}
        />
        <SliderBlock
          range={prevalenceFilterRange || prevalenceRange}
          selected={prevalenceFilterSelected || prevalenceRange}
          handleChange={handlePrevalenceFilterChange}
        />
      </div>
      <br />
      <CheckFilter />
    </div>
  );
};
