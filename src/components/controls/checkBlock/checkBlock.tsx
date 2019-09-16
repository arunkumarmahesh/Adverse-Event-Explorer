import React, { FC } from "react";
import { Checkbox } from "semantic-ui-react";

export interface Props {
  label: string;
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
  handleChange
}) => {
  const checkIfChangeable = (e: any, { value }: any) => {
    if (checked.length > 1) {
      handleChange(value);
    } else {
      !checked.includes(value) && handleChange(value);
    }
  };

  return (
    <div>
      <div>
        {label}
        <sup>E</sup>
      </div>
      {options.map((item, key: number) => (
        <Checkbox
          key={key}
          label={item}
          onChange={checkIfChangeable}
          value={item}
          checked={checked.includes(item) ? true : false}
          disabled={disabled}
        />
      ))}
    </div>
  );
};
