import * as t from "../../../types";

export const seriousFilterOptions: t.SeriousFilter[] = ["N", "Y"];

export const severityFilterOptions: t.SeverityFilter[] = [
  "MODERATE",
  "SEVERE",
  "MILD"
];

export const relationshipFilterOptions: t.RelationshipFilter[] = [
  "UNLIKELY RELATED",
  "PROBABLY RELATED",
  "NOT RELATED",
  "POSSIBLY RELATED",
  "DEFINITELY RELATED"
];

export const outcomeFilterOptions: t.OutcomeFilter[] = [
  "RECOVERED",
  "RESOLVED, RECOVERED",
  "RESOLVED WITHOUT SEQUELAE",
  "RESOLVED WITH SEQUELAE"
];
