import * as c from "../store/constants";

export type SummarizedBy = "Participants" | "Events";

export type GroupVariable = "RACE" | "SEX" | "ARM" | "NONE";

export type Serious = "N" | "Y";

export type Severity = "MODERATE" | "SEVERE" | "MILD";

export type Relationship =
  | "UNLIKELY RELATED"
  | "PROBABLY RELATED"
  | "NOT RELATED"
  | "POSSIBLY RELATED"
  | "DEFINITELY RELATED";

export type Outcome =
  | "RECOVERED"
  | "RESOLVED, RECOVERED"
  | "RESOLVED WITHOUT SEQUELAE"
  | "RESOLVED WITH SEQUELAE";

export type SelectOptions = {
  key: string;
  value: string;
  text: string;
};

export interface AppState {
  datas: any[];
  groupVariable: GroupVariable;
  summarizedBy: SummarizedBy;
  serious: Serious[];
  severity: Severity[];
  relationship: Relationship[];
  outcome: Outcome[];
}

export type ActionTypes =
  | SetSummarizedBy
  | SetGroupVariable
  | SetSerious
  | SetSeverity
  | SetRelationship
  | SetOutcome;

export interface SetSummarizedBy {
  type: typeof c.SET_SUMMARIZED_BY;
  payload: SummarizedBy;
}

export interface SetGroupVariable {
  type: typeof c.SET_GROUP_VARIABLE;
  payload: GroupVariable;
}

export interface SetSerious {
  type: typeof c.SET_SERIOUS;
  payload: Serious;
}

export interface SetSeverity {
  type: typeof c.SET_SEVERITY;
  payload: Severity;
}

export interface SetRelationship {
  type: typeof c.SET_RELATIONSHIP;
  payload: Relationship;
}

export interface SetOutcome {
  type: typeof c.SET_OUTCOME;
  payload: Outcome;
}
