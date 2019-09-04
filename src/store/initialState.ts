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

export interface AppState {
  data: [{}];
  groupVariable: GroupVariable;
  summarizedBy: SummarizedBy;
  serious: Serious[];
  severity: Severity[];
  relationship: Relationship[];
  outcome: Outcome[];
}

export const initialState: AppState = {
  data: [{}],
  groupVariable: "ARM",
  summarizedBy: "Participants",
  serious: ["N", "Y"],
  severity: ["MODERATE", "SEVERE", "MILD"],
  relationship: [
    "UNLIKELY RELATED",
    "PROBABLY RELATED",
    "NOT RELATED",
    "POSSIBLY RELATED",
    "DEFINITELY RELATED"
  ],
  outcome: [
    "RECOVERED",
    "RESOLVED, RECOVERED",
    "RESOLVED WITHOUT SEQUELAE",
    "RESOLVED WITH SEQUELAE"
  ]
};
