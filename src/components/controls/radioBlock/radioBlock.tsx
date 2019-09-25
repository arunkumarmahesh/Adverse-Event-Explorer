import React, { FC, ReactNode, FormEvent, HTMLAttributes } from "react";
import { RadioWrapper, Radio } from "./radioBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string | ReactNode;
  options: string[];
  checked: string;
  handleChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
}

export const RadioBlock: FC<Props> = ({
  label,
  options,
  checked,
  handleChange,
  ...rest
}) => (
  <RadioWrapper {...rest}>
    {label && <label>{label}</label>}
    {options.map(item => (
      <Radio
        key={item}
        label={item}
        onChange={handleChange}
        value={item}
        checked={checked === item ? true : false}
      />
    ))}
  </RadioWrapper>
);
