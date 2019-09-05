import React, { FC, FormEvent } from "react";
import { Radio } from "semantic-ui-react";

export interface Props {
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
  handleChange
}) => (
  <div>
    <div>{label}:</div>
    {options.map((item, key: number) => (
      <Radio
        key={key}
        label={item}
        onChange={handleChange}
        value={item}
        checked={checked === item ? true : false}
      />
    ))}
  </div>
);
