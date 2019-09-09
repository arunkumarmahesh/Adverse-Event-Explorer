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
  colors: string[];
  groupVariable: GroupVariable;
  summarizedBy: SummarizedBy;
  prevalenceRange: [number, number];
  ageRange: [number, number];
  serious: Serious[];
  severity: Severity[];
  relationship: Relationship[];
  outcome: Outcome[];
}

export type ActionTypes =
  | SetSummarizedBy
  | SetGroupVariable
  | SetPrevalenceRange
  | SetAgeRange
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

export interface SetPrevalenceRange {
  type: typeof c.SET_PREVALENCE_RANGE;
  payload: [number, number];
}

export interface SetAgeRange {
  type: typeof c.SET_AGE_RANGE;
  payload: [number, number];
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

export type Groups = { [key: string]: number };

export type Data = {
  USUBJID: string;
  SITE: string;
  SITEID: string;
  AGE: number | string;
  SEX: string;
  RACE: string;
  ARM: string;
  ARMCD: string;
  SBJTSTAT: string;
  RFSTDTC: string;
  RFENDTC: string;
  RFENDY: number | string;
  SAFFL: string;
  SAFFN: number | string;
  ASEQ: number | string;
  ASTDT: string;
  ASTDY: number | string;
  AENDT: string;
  AENDY: number | string;
  AETERM: string;
  AEDECOD: string;
  AEBODSYS: string;
  AESER: string;
  AEONGO: string;
  AESEV: string;
  AEREL: string;
  AEOUT: string;
  AESEQ: number | string;
};
