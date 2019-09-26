import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectBlock } from "../../../components";
import { AppState, SelectOptions } from "../../../types";
import {
  setGroupVariable,
  setPrevalenceFilterGroup,
  setSortColumns,
  setPrevalenceFilterSelected
} from "../../../store/actions";

export interface Props {
  prevalenceRange: [number, number];
}

export const GroupByConnect: FC<Props> = ({ prevalenceRange }) => {
  const dispatch = useDispatch();
  const groupVariable = useSelector((state: AppState) => state.groupVariable);

  const groupVariableOptions: SelectOptions[] = [
    { key: "RACE", value: "RACE", text: "RACE" },
    { key: "SEX", value: "SEX", text: "SEX" },
    { key: "ARM", value: "ARM", text: "ARM" },
    { key: "NONE", value: "NONE", text: "NONE" }
  ];

  return (
    <SelectBlock
      label="Group Variable:"
      options={groupVariableOptions}
      value={groupVariable}
      handleChange={(e, { value }) => {
        dispatch(setGroupVariable(value));
        // reset PrevalenceFilterGroup to default
        dispatch(setPrevalenceFilterGroup("All"));
        dispatch(setPrevalenceFilterSelected(prevalenceRange));
        dispatch(setSortColumns([]));
      }}
    />
  );
};
