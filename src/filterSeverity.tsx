import React, { FC } from "react";
import { Checkbox } from "semantic-ui-react";

export interface Props {
  severity: string[];
  handleSeverityChange: any;
}

export const FilterSeverity: FC<Props> = ({
  severity,
  handleSeverityChange
}) => (
  <div>
    <div>
      Severity?<sup>E</sup>
    </div>
    <Checkbox
      label="MODERATE"
      onChange={handleSeverityChange}
      value="MODERATE"
      checked={severity.includes("MODERATE") ? true : false}
    />
    <Checkbox
      label="SEVERE"
      onChange={handleSeverityChange}
      value="SEVERE"
      checked={severity.includes("SEVERE") ? true : false}
    />
    <Checkbox
      label="MILD"
      onChange={handleSeverityChange}
      value="MILD"
      checked={severity.includes("MILD") ? true : false}
    />
  </div>
);
