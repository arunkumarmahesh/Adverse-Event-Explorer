import React, { FC, HTMLAttributes } from "react";
import { SelectWrapper, Select } from "./selectBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  labelPosition?: "top" | "left";
  placeholder?: string;
  options: any;
  value: string;
  handleChange: (e: any, value: any) => void;
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
