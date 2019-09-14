import * as c from "../store/constants";
import * as t from ".";

export type ActionTypes =
  | SetSummarizedBy
  | SetGroupVariable
  | SetSearchTerm
  | SetPrevalenceFilterRange
  | SetPrevalenceFilterSelected
  | SetAgeFilterRange
  | SetAgeFilterSelected
  | SetSerious
  | SetSeverity
  | SetRelationship
  | SetOutcome
  | SetExpandedCategories
  | SetDetailSearchTerm
  | SetDetailSortColumns
  | SetDetailResultsPerPage;

export interface SetSummarizedBy {
  type: typeof c.SET_SUMMARIZED_BY;
  payload: t.SummarizedBy;
}

export interface SetGroupVariable {
  type: typeof c.SET_GROUP_VARIABLE;
  payload: t.GroupVariable;
}

export interface SetSearchTerm {
  type: typeof c.SET_SEARCH_TERM;
  payload: string;
}

export interface SetPrevalenceFilterRange {
  type: typeof c.SET_PREVALENCE_FILTER_RANGE;
  payload: [number, number];
}

export interface SetPrevalenceFilterSelected {
  type: typeof c.SET_PREVALENCE_FILTER_SELECTED;
  payload: [number, number];
}

export interface SetAgeFilterRange {
  type: typeof c.SET_AGE_FILTER_RANGE;
  payload: [number, number];
}

export interface SetAgeFilterSelected {
  type: typeof c.SET_AGE_FILTER_SELECTED;
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

export interface SetExpandedCategories {
  type: typeof c.SET_EXPANDED_CATEGORIES;
  payload: string;
}

export interface SetDetailSearchTerm {
  type: typeof c.SET_DETAIL_SEARCH_TERM;
  payload: string;
}

export interface SetDetailSortColumns {
  type: typeof c.SET_DETAIL_SORT_COLUMNS;
  payload: t.DetailSortItem[];
}

export interface SetDetailResultsPerPage {
  type: typeof c.SET_DETAIL_RESULTS_PER_PAGE;
  payload: number;
}
