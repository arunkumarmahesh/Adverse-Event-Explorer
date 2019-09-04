import React, { FC, SyntheticEvent } from "react";
import { Select } from "semantic-ui-react";

export interface Props {
  groupVariable: string;
  handleGroupVariableChange: (
    e: SyntheticEvent<HTMLElement>,
    value: any // Semantic UI DropdownProps are any too
  ) => void;
}

export const FilterGroupVariable: FC<Props> = ({
  groupVariable,
  handleGroupVariableChange
}) => {
  const groupVariableOptions = [
    { key: "RACE", value: "RACE", text: "RACE" },
    { key: "SEX", value: "SEX", text: "SEX" },
    { key: "ARM", value: "ARM", text: "ARM" },
    { key: "NONE", value: "NONE", text: "NONE" }
  ];

  return (
    <Select
      placeholder="Select Group Variable"
      options={groupVariableOptions}
      onChange={handleGroupVariableChange}
      value={groupVariable}
    />
  );
};
