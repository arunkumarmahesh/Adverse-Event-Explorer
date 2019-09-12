import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectBlock } from "../../../components";
import { AppState, SelectOptions } from "../../../types";
import { SET_GROUP_VARIABLE } from "../../../store/constants";

export const GroupBy: FC = () => {
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
        dispatch({ type: SET_GROUP_VARIABLE, payload: value });
      }}
    />
  );
};
