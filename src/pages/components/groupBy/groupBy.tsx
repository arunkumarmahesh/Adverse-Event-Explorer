import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectBlock } from "../../../components";
import { AppState, SelectOptions } from "../../../types";
import {
  setGroupVariable,
  setPrevalenceFilterGroup
} from "../../../store/actions";

export interface Props {}

export const GroupBy: FC<Props> = () => {
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
      selected={groupVariable}
      handleChange={(e, { value }) => {
        dispatch(setGroupVariable(value));
        // reset PrevalenceFilterGroup to default
        dispatch(setPrevalenceFilterGroup("All"));
      }}
    />
  );
};
