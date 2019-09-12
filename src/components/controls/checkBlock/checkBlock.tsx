import React, { FC, FormEvent } from "react";
import { Checkbox } from "semantic-ui-react";

export interface Props {
  label: string;
  options: string[];
  checked: string[];
  disabled?: boolean;
  handleChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
}

export const CheckBlock: FC<Props> = ({
  label,
  options,
  checked,
  disabled,
  handleChange
}) => (
  <div>
    <div>
      {label}
      <sup>E</sup>
    </div>
    {options.map((item, key: number) => (
      <Checkbox
        key={key}
        label={item}
        onChange={handleChange}
        value={item}
        checked={checked.includes(item) ? true : false}
        disabled={disabled}
      />
    ))}
  </div>
);
