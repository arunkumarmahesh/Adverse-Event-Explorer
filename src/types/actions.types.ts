import * as c from "../store/constants";
import * as t from ".";

export type ActionTypes =
  | SetSummarizedBy
  | SetGroupVariable
  | SetSearchTerm
  | SetSortColumn
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
  | SetDetailSortColumn
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

export interface SetSortColumn {
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
  payload: t.SeriousFilter;
}

export interface SetSeverityFilter {
  type: typeof c.SET_SEVERITY_FILTER;
  payload: t.SeverityFilter;
}

export interface SetRelationshipFilter {
  type: typeof c.SET_RELATIONSHIP_FILTER;
  payload: t.RelationshipFilter;
}

export interface SetOutcomeFilter {
  type: typeof c.SET_OUTCOME_FILTER;
  payload: t.OutcomeFilter;
}

export interface SetExpandedCategories {
  type: typeof c.SET_EXPANDED_CATEGORIES;
  payload: string;
}

export interface SetDetailSearchTerm {
  type: typeof c.SET_DETAIL_SEARCH_TERM;
  payload: string;
}

export interface SetDetailSortColumn {
  type: typeof c.SET_DETAIL_SORT_COLUMNS;
  payload: t.SortColumn[];
}

export interface SetDetailResultsPerPage {
  type: typeof c.SET_DETAIL_RESULTS_PER_PAGE;
  payload: number;
}
