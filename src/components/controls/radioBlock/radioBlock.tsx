import React, { FC, FormEvent, HTMLAttributes } from "react";
import { Radio } from "semantic-ui-react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
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
  <div {...rest}>
    <div>{label}</div>
    {options.map(item => (
      <Radio
        key={item}
        label={item}
        onChange={handleChange}
        value={item}
        checked={checked === item ? true : false}
      />
    ))}
  </div>
);
