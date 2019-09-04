import React, { FC } from "react";
import { Checkbox } from "semantic-ui-react";

export interface Props {
  serious: string[];
  handleSeriousChange: any;
}

export const FilterSerious: FC<Props> = ({ serious, handleSeriousChange }) => (
  <div>
    <div>
      Serious?<sup>E</sup>
    </div>
    <Checkbox
      label="N"
      onChange={handleSeriousChange}
      value="N"
      checked={serious.includes("N") ? true : false}
    />
    <Checkbox
      label="Y"
      onChange={handleSeriousChange}
      value="Y"
      checked={serious.includes("Y") ? true : false}
    />
  </div>
);
