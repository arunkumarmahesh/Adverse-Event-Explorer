import React, { FC, SyntheticEvent, HTMLAttributes } from "react";
import { Select } from "semantic-ui-react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  placeholder?: string;
  options: any;
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
  handleChange,
  ...rest
}) => {
  return (
    <div {...rest}>
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
