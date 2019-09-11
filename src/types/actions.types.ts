import * as c from "../store/constants";
import * as t from ".";

export type ActionTypes =
  | SetSummarizedDatas
  | SetSearchedDatas
  | SetFilteredDatas
  | SetHeaderValues
  | SetFooterValues
  | SetSummarizedBy
  | SetGroupVariable
  | SetPrevalenceRangeAll
  | SetPrevalenceRangeSelected
  | SetAgeRangeAll
  | SetAgeRangeSelected
  | SetSerious
  | SetSeverity
  | SetRelationship
  | SetOutcome
  | SetDetailDatas
  | SetDetailSearch
  | SetDetailSort
  | SetDetailPages;

export interface SetSummarizedDatas {
  type: typeof c.SET_SUMMARIZED_DATAS;
  payload: t.GroupedDatas;
}

export interface SetSearchedDatas {
  type: typeof c.SET_SEARCHED_DATAS;
  payload: t.GroupedDatas;
}

export interface SetFilteredDatas {
  type: typeof c.SET_FILTERED_DATAS;
  payload: t.GroupedDatas;
}

export interface SetHeaderValues {
  type: typeof c.SET_HEADER_VALUES;
  payload: t.GroupedValues;
}

export interface SetFooterValues {
  type: typeof c.SET_FOOTER_VALUES;
  payload: t.GroupedValues;
}

export interface SetSummarizedBy {
  type: typeof c.SET_SUMMARIZED_BY;
  payload: t.SummarizedBy;
}

export interface SetGroupVariable {
  type: typeof c.SET_GROUP_VARIABLE;
  payload: t.GroupVariable;
}

export interface SetPrevalenceRangeAll {
  type: typeof c.SET_PREVALENCE_RANGE_ALL;
  payload: [number, number];
}

export interface SetPrevalenceRangeSelected {
  type: typeof c.SET_PREVALENCE_RANGE_SELECTED;
  payload: [number, number];
}

export interface SetAgeRangeAll {
  type: typeof c.SET_AGE_RANGE_ALL;
  payload: [number, number];
}

export interface SetAgeRangeSelected {
  type: typeof c.SET_AGE_RANGE_SELECTED;
  payload: [number, number];
}

export interface SetSerious {
  type: typeof c.SET_SERIOUS;
  payload: t.Serious;
}

export interface SetSeverity {
  type: typeof c.SET_SEVERITY;
  payload: t.Severity;
}

export interface SetRelationship {
  type: typeof c.SET_RELATIONSHIP;
  payload: t.Relationship;
}

export interface SetOutcome {
  type: typeof c.SET_OUTCOME;
  payload: t.Outcome;
}

export interface SetDetailDatas {
  type: typeof c.SET_DETAIL_DATAS;
  key: string;
  payload: t.StoredDatas;
}

export interface SetDetailSearch {
  type: typeof c.SET_DETAIL_SEARCH;
  payload: string;
}

export interface SetDetailSort {
  type: typeof c.SET_DETAIL_SORT;
  payload: t.DetailSort;
}

export interface SetDetailPages {
  type: typeof c.SET_DETAIL_PAGES;
  payload: number;
}
