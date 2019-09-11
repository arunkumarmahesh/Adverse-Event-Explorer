import * as t from "../types";

export const fuseOptions = {
  keys: ["AETERM", "AEDECOD", "AESEV", "AEREL", "AEOUT"],
  threshold: 0
};

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

export const resultsPerPageOptions: t.SelectOptions[] = [
  { key: "5", value: "5", text: "5" },
  { key: "10", value: "10", text: "10" },
  { key: "25", value: "25", text: "25" },
  { key: "50", value: "50", text: "50" }
];
