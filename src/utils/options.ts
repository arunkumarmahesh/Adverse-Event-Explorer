import * as t from "../types";

export const summarizedByOptions: t.SummarizedBy[] = ["Participants", "Events"];

export const seriousOptions: t.Serious[] = ["N", "Y"];

export const severityOptions: t.Severity[] = ["MODERATE", "SEVERE", "MILD"];

export const relationshipOptions: t.Relationship[] = [
  "UNLIKELY RELATED",
  "PROBABLY RELATED",
  "NOT RELATED",
  "POSSIBLY RELATED",
  "DEFINITELY RELATED"
];

export const outcomeOptions: t.Outcome[] = [
  "RECOVERED",
  "RESOLVED, RECOVERED",
  "RESOLVED WITHOUT SEQUELAE",
  "RESOLVED WITH SEQUELAE"
];

export const groupVariableOptions: t.SelectOptions[] = [
  { key: "RACE", value: "RACE", text: "RACE" },
  { key: "SEX", value: "SEX", text: "SEX" },
  { key: "ARM", value: "ARM", text: "ARM" },
  { key: "NONE", value: "NONE", text: "NONE" }
];

// TODO: automate this with a function given the highest prevalence value floored
export const prevalenceOptions: t.SelectOptions[] = [
  { key: "0", value: "0", text: "≥ 0%" },
  { key: "1", value: "1", text: "≥ 1%" },
  { key: "2", value: "2", text: "≥ 2%" },
  { key: "3", value: "3", text: "≥ 3%" },
  { key: "4", value: "4", text: "≥ 4%" }
];
