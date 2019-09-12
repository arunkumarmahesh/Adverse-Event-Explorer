import * as t from "../../../types";

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
