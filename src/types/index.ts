export * from "./actions.types";
export * from "./initialState.types";

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

export type Groups = { [key: string]: number };

export type GroupedValue = {
  name: string;
  value: number;
  total: number;
};

export type GroupedDatas = {
  [key: string]: Groups;
};

export type StoredDatas = {
  datas: Data[];
  size: number;
};

export type DetailSortItem = {
  name: string;
  direction: SortDirection;
};

export type SortDirection = "asc" | "desc";

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
