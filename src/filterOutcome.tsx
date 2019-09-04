import React, { FC } from "react";
import { Checkbox } from "semantic-ui-react";

export interface Props {
  outcome: string[];
  handleOutcomeChange: any;
}

export const FilterOutcome: FC<Props> = ({ outcome, handleOutcomeChange }) => (
  <div>
    <div>
      Outcome?<sup>E</sup>
    </div>
    <Checkbox
      label="RECOVERED"
      onChange={handleOutcomeChange}
      value="RECOVERED"
      checked={outcome.includes("RECOVERED") ? true : false}
    />
    <Checkbox
      label="RESOLVED, RECOVERED"
      onChange={handleOutcomeChange}
      value="RESOLVED, RECOVERED"
      checked={outcome.includes("RESOLVED, RECOVERED") ? true : false}
    />
    <Checkbox
      label="RESOLVED WITHOUT SEQUELAE"
      onChange={handleOutcomeChange}
      value="RESOLVED WITHOUT SEQUELAE"
      checked={outcome.includes("RESOLVED WITHOUT SEQUELAE") ? true : false}
    />
    <Checkbox
      label="RESOLVED WITH SEQUELAE"
      onChange={handleOutcomeChange}
      value="RESOLVED WITH SEQUELAE"
      checked={outcome.includes("RESOLVED WITH SEQUELAE") ? true : false}
    />
  </div>
);
