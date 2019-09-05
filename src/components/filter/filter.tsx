import React, { FC, FormEvent, SyntheticEvent } from "react";
import { CheckboxBlock } from "./checkboxBlock";
import { RadioBlock } from "./radioBlock";
import { SelectBlock } from "./selectBlock";

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
      <CheckboxBlock
        label="Summarized by:"
        options={["Participants", "Events"]}
        checked={}
        handleChange={}
      />
      <SelectBlock
        label="Group Variable:"
        options={}
        selected={}
        HandleChange={}
      />
      <CheckboxBlock label="Serious?" options={} checked={} handleChange={} />
      <CheckboxBlock label="Severity" options={} checked={} handleChange={} />
      <CheckboxBlock
        label="Relationship"
        options={}
        checked={}
        handleChange={}
      />
      <CheckboxBlock label="Outcome" options={} checked={} handleChange={} />
    </div>
  );
};
