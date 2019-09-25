import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Select } from "semantic-ui-react";
import { Slider, SelectBlock } from "../../../components";
import { HeaderGroups, AppState } from "../../../types";
import {
  setPrevalenceFilterSelected,
  setPrevalenceFilterGroup
} from "../../../store/actions";

export interface Props {
  headerGroups: HeaderGroups;
  bodyGroups: any;
  prevalenceRange: [number, number];
}

export const FilterPrevalence: FC<Props> = ({
  headerGroups,
  bodyGroups,
  prevalenceRange
}) => {
  const dispatch = useDispatch();

  const [groupPrevalenceRange, setGroupPrevalenceRange] = useState();

  const prevalenceSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );
  const prevalenceGroup = useSelector(
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
    const object: any = _.maxBy(bodyGroups, value);
    if (value !== "All") {
      setGroupPrevalenceRange([0, object[value]]);
    } else {
      setGroupPrevalenceRange(undefined);
    }

    dispatch(setPrevalenceFilterGroup(value));
  };

  const currentRange = groupPrevalenceRange || prevalenceRange;

  if (!prevalenceSelected) {
    dispatch(setPrevalenceFilterSelected(currentRange));
  }

  return (
    <div>
      <SelectBlock
        label="Filter by prevalence:"
        labelPosition="left"
        options={generatePrevalenceOptions(headerGroups)}
        value={prevalenceGroup}
        handleChange={handlePrevalenceFilterGroupChange}
      />
      <Slider
        range={currentRange}
        selected={prevalenceSelected || [0, 0]}
        handleChange={handlePrevalenceFilterChange}
      />
    </div>
  );
};
