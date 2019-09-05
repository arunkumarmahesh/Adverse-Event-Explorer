import React, { FC, SyntheticEvent } from "react";
import { Select } from "semantic-ui-react";
import { SelectOptions } from "../utils/types";

export interface Props {
  label: string;
  placeholder?: string;
  options: SelectOptions[];
  selected: string;
  handleChange: (
    e: SyntheticEvent<HTMLElement>,
    value: any // Semantic UI DropdownProps are any too
  ) => void;
}

export const SelectBlock: FC<Props> = ({
  label,
  placeholder,
  options,
  selected,
  handleChange
}) => {
  return (
    <div>
      <div>{label}</div>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
        value={selected}
      />
    </div>
  );
};