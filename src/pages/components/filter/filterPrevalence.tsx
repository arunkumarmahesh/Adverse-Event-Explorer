import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Select } from "semantic-ui-react";
import { Slider } from "../../../components";
import { HeaderGroups, AppState } from "../../../types";
import {
  setPrevalenceFilterRange,
  setPrevalenceFilterSelected,
  setPrevalenceFilterGroup
} from "../../../store/actions";

export interface Props {
  headerGroups: HeaderGroups;
  prevalenceRange: [number, number];
  bodyGroups: any;
}

export const FilterPrevalence: FC<Props> = ({
  headerGroups,
  bodyGroups,
  prevalenceRange
}) => {
  const dispatch = useDispatch();
  const prevalenceFilterRange = useSelector(
    (state: AppState) => state.prevalenceFilterRange
  );
  const prevalenceFilterSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );
  const prevalenceFilterGroup = useSelector(
    (state: AppState) => state.prevalenceFilterGroup
  );

  const generatePrevalenceOptions = (headerGroups: HeaderGroups) => {
    let options = [];
    headerGroups.forEach((value: { name: string; value: number }) => {
      if (value.name !== "Screen Failure") {
        options.push({
          key: value.name,
          value: value.name,
          text: value.name
        });
      }
    });
    options.unshift({ key: "All", value: "All", text: "All" });
    return options;
  };

  const handlePrevalenceFilterChange = (value: [number, number]) => {
    dispatch(setPrevalenceFilterSelected(value));
  };

  const handlePrevalenceFilterGroupChange = (e: any, { value }: any) => {
    dispatch(setPrevalenceFilterGroup(value));
  };

  if (!_.isEqual(prevalenceFilterRange, prevalenceRange)) {
    dispatch(setPrevalenceFilterRange(prevalenceRange));
  }
  if (!prevalenceFilterSelected) {
    dispatch(setPrevalenceFilterSelected(prevalenceRange));
  }

  return (
    <div>
      <b>Filter by prevalence:</b>
      <Select
        options={generatePrevalenceOptions(headerGroups)}
        value={prevalenceFilterGroup}
        onChange={handlePrevalenceFilterGroupChange}
      />
      <Slider
        range={prevalenceRange}
        selected={prevalenceFilterSelected || [0, 0]}
        handleChange={handlePrevalenceFilterChange}
      />
    </div>
  );
};
