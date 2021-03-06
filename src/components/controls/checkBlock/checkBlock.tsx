import React, { FC, ReactNode } from "react";
import { CheckWrapper, Checkbox } from "./checkBlock.styles";

export interface Props {
  label?: string | ReactNode;
  options: string[];
  checked: string[];
  disabled?: boolean;
  handleChange: (value: string) => void;
}

export const CheckBlock: FC<Props> = ({
  label,
  options,
  checked,
  disabled,
  handleChange,
  ...rest
}) => {
  const checkIfChangeable = (e: any, { value }: any) => {
    if (checked.length > 1) {
      handleChange(value);
    } else {
      !checked.includes(value) && handleChange(value);
    }
  };

  return (
    <CheckWrapper {...rest}>
      {label && <label>{label}</label>}
      {options.map(item => (
        <Checkbox
          key={item}
          label={item}
          onChange={checkIfChangeable}
          value={item}
          checked={checked.includes(item) ? true : false}
          disabled={disabled}
        />
      ))}
    </CheckWrapper>
  );
};
