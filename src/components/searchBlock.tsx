import React, { FC, FormEvent, HTMLAttributes } from "react";
import { Search } from "semantic-ui-react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  handleChange?: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
}

export const SearchBlock: FC<Props> = ({ label, handleChange, ...rest }) => (
  <div {...rest}>
    <div>{label}</div>
    <Search />
  </div>
);
