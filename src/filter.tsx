import React, { FC, FormEvent, SyntheticEvent } from "react";
import { FilterSummarizedBy } from "./filterSummarizedBy";
import { FilterGroupVariable } from "./filterGroupVariable";
import { FilterSerious } from "./filterSerious";
import { FilterSeverity } from "./filterSeverity";
import { FilterRelationship } from "./filterRelationship";
import { FilterOutcome } from "./filterOutcome";

export interface Props {
  groupVariable: string;
  summarizedBy: string;
  serious: string[];
  severity: string[];
  relationship: string[];
  outcome: string[];
  handleSummarizedByChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
  handleGroupVariableChange: (
    e: SyntheticEvent<HTMLElement>,
    value: any // Semantic UI DropdownProps are any too
  ) => void;
  handleSeriousChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
  handleSeverityChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
  handleRelationshipChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
  handleOutcomeChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
}

export const Filter: FC<Props> = ({
  groupVariable,
  summarizedBy,
  serious,
  severity,
  relationship,
  outcome,
  handleSummarizedByChange,
  handleGroupVariableChange,
  handleSeriousChange,
  handleSeverityChange,
  handleRelationshipChange,
  handleOutcomeChange
}) => {
  return (
    <div>
      <div>
        <FilterSummarizedBy
          summarizedBy={summarizedBy}
          handleSummarizedByChange={handleSummarizedByChange}
        />
      </div>
      <div>
        <FilterGroupVariable
          groupVariable={groupVariable}
          handleGroupVariableChange={handleGroupVariableChange}
        />
      </div>
      <div>
        <FilterSerious
          serious={serious}
          handleSeriousChange={handleSeriousChange}
        />
      </div>
      <div>
        <FilterSeverity
          severity={severity}
          handleSeverityChange={handleSeverityChange}
        />
      </div>
      <div>
        <FilterRelationship
          relationship={relationship}
          handlerelationshipChange={handleRelationshipChange}
        />
      </div>
      <div>
        <FilterOutcome
          outcome={outcome}
          handleOutcomeChange={handleOutcomeChange}
        />
      </div>
    </div>
  );
};
