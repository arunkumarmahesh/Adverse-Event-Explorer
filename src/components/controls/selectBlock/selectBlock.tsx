import React, { FC, SyntheticEvent, HTMLAttributes } from "react";
import { Select } from "semantic-ui-react";
import { SelectWrapper } from "./selectBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  labelPosition?: "top" | "left";
  placeholder?: string;
  options: any;
  value: string;
  handleChange: (
    e: SyntheticEvent<HTMLElement>,
    value: any // Semantic UI DropdownProps are any too
  ) => void;
}

export const SelectBlock: FC<Props> = ({
  label,
  labelPosition,
  placeholder,
  options,
  value,
  handleChange,
  ...rest
}) => {
  return (
    <SelectWrapper labelPosition={labelPosition} {...rest}>
      {label && <label>{label}</label>}
      <Select
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
        value={value}
      />
    </SelectWrapper>
  );
};
