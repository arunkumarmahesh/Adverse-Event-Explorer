import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../../../components";
import { setAgeFilterSelected } from "../../../store/actions";
import { AppState } from "../../../types";

export interface Props {
  ageRange: [number, number];
}

export const FilterAge: FC<Props> = ({ ageRange }) => {
  const dispatch = useDispatch();

  const ageFilterSelected = useSelector(
    (state: AppState) => state.ageFilterSelected
  );

  const handleAgeChange = (value: [number, number]) => {
    dispatch(setAgeFilterSelected(value));
  };

  return (
    <div>
      <b>Filter by age:</b>
      <Slider
        range={ageRange}
        selected={ageFilterSelected || ageRange}
        handleChange={handleAgeChange}
      />
    </div>
  );
};
