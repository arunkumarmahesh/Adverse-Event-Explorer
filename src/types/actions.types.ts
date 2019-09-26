import * as c from "../store/constants";
import * as t from ".";

export type ActionTypes =
  | SetSummarizedBy
  | SetGroupVariable
  | SetSearchTerm
  | setSortColumns
  | SetPrevalenceFilterRange
  | SetPrevalenceFilterSelected
  | SetPrevalenceFilterGroup
  | SetAgeFilterRange
  | SetAgeFilterSelected
  | SetSeriousFilter
  | SetSeverityFilter
  | SetRelationshipFilter
  | SetOutcomeFilter
  | SetExpandedCategories
  | SetDetailSearchTerm
  | SetDetailSortColumns
  | SetDetailResultsPerPage
  | ResetStore
  | SetStoreNames
  | SetStoreSelection;

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

export interface setSortColumns {
  type: typeof c.SET_SORT_COLUMNS;
  payload: t.SortColumn[];
}

export interface SetPrevalenceFilterRange {
  type: typeof c.SET_PREVALENCE_FILTER_RANGE;
  payload: [number, number];
}

export interface SetPrevalenceFilterSelected {
  type: typeof c.SET_PREVALENCE_FILTER_SELECTED;
  payload: [number, number];
}

export interface SetPrevalenceFilterGroup {
  type: typeof c.SET_PREVALENCE_FILTER_GROUP;
  payload: string;
}

export interface SetAgeFilterRange {
  type: typeof c.SET_AGE_FILTER_RANGE;
  payload: [number, number];
}

export interface SetAgeFilterSelected {
  type: typeof c.SET_AGE_FILTER_SELECTED;
  payload: [number, number];
}

export interface SetSeriousFilter {
  type: typeof c.SET_SERIOUS_FILTER;
  payload: string;
}

export interface SetSeverityFilter {
  type: typeof c.SET_SEVERITY_FILTER;
  payload: string;
}

export interface SetRelationshipFilter {
  type: typeof c.SET_RELATIONSHIP_FILTER;
  payload: string;
}

export interface SetOutcomeFilter {
  type: typeof c.SET_OUTCOME_FILTER;
  payload: string;
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
  payload: t.SortColumn[];
}

export interface SetDetailResultsPerPage {
  type: typeof c.SET_DETAIL_RESULTS_PER_PAGE;
  payload: number;
}

export interface ResetStore {
  type: typeof c.RESET_STORE;
}

export interface SetStoreNames {
  type: typeof c.SET_STORE_NAMES;
  payload: string;
}

export interface SetStoreSelection {
  type: typeof c.SET_STORE_SELECTION;
  payload: t.AppState | {};
}
