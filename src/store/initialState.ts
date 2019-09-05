import datas from "../data.json";

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

export const summarizedByOptions: SummarizedBy[] = ["Participants", "Events"];

export const seriousOptions: Serious[] = ["N", "Y"];

export const severityOptions: Severity[] = ["MODERATE", "SEVERE", "MILD"];

export const relationshipOptions: Relationship[] = [
  "UNLIKELY RELATED",
  "PROBABLY RELATED",
  "NOT RELATED",
  "POSSIBLY RELATED",
  "DEFINITELY RELATED"
];

export const outcomeOptions: Outcome[] = [
  "RECOVERED",
  "RESOLVED, RECOVERED",
  "RESOLVED WITHOUT SEQUELAE",
  "RESOLVED WITH SEQUELAE"
];

export interface AppState {
  datas: any[];
  groupVariable: GroupVariable;
  summarizedBy: SummarizedBy;
  serious: Serious[];
  severity: Severity[];
  relationship: Relationship[];
  outcome: Outcome[];
}

export const initialState: AppState = {
  datas: datas,
  groupVariable: "ARM",
  summarizedBy: "Participants",
  serious: seriousOptions,
  severity: severityOptions,
  relationship: relationshipOptions,
  outcome: outcomeOptions
};

export type SelectOptions = {
  key: string;
  value: string;
  text: string;
};
export const groupVariableOptions: SelectOptions[] = [
  { key: "RACE", value: "RACE", text: "RACE" },
  { key: "SEX", value: "SEX", text: "SEX" },
  { key: "ARM", value: "ARM", text: "ARM" },
  { key: "NONE", value: "NONE", text: "NONE" }
];
