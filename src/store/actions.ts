import * as t from "../types";
import * as c from "./constants";

export const setSummarizedBy = (
  payload: t.SummarizedBy
): t.SetSummarizedBy => ({
  type: c.SET_SUMMARIZED_BY,
  payload
});

export const setGroupVariable = (
  payload: t.GroupVariable
): t.SetGroupVariable => ({
  type: c.SET_GROUP_VARIABLE,
  payload
});

export const setSearchTerm = (payload: string): t.SetSearchTerm => ({
  type: c.SET_SEARCH_TERM,
  payload
});

export const setPrevalenceFilterRange = (
  payload: [number, number]
): t.SetPrevalenceFilterRange => ({
  type: c.SET_PREVALENCE_FILTER_RANGE,
  payload
});

export const setPrevalenceFilterSelected = (
  payload: [number, number]
): t.SetPrevalenceFilterSelected => ({
  type: c.SET_PREVALENCE_FILTER_SELECTED,
  payload
});

export const setAgeFilterRange = (
  payload: [number, number]
): t.SetAgeFilterRange => ({
  type: c.SET_AGE_FILTER_RANGE,
  payload
});

export const setAgeFilterSelected = (
  payload: [number, number]
): t.SetAgeFilterSelected => ({
  type: c.SET_AGE_FILTER_SELECTED,
  payload
});

export const setSerious = (payload: t.Serious): t.SetSerious => ({
  type: c.SET_SERIOUS,
  payload
});

export const setSeverity = (payload: t.Severity): t.SetSeverity => ({
  type: c.SET_SEVERITY,
  payload
});

export const setRelationship = (
  payload: t.Relationship
): t.SetRelationship => ({
  type: c.SET_RELATIONSHIP,
  payload
});

export const setOutcome = (payload: t.Outcome): t.SetOutcome => ({
  type: c.SET_OUTCOME,
  payload
});

export const setExpandedCategories = (
  payload: string
): t.SetExpandedCategories => ({
  type: c.SET_EXPANDED_CATEGORIES,
  payload
});

export const setDetailSearchTerm = (
  payload: string
): t.SetDetailSearchTerm => ({
  type: c.SET_DETAIL_SEARCH_TERM,
  payload
});

export const setDetailSort = (
  payload: t.DetailSortItem[]
): t.SetDetailSortColumns => ({
  type: c.SET_DETAIL_SORT_COLUMNS,
  payload
});

export const setDetailPages = (payload: number): t.SetDetailResultsPerPage => ({
  type: c.SET_DETAIL_RESULTS_PER_PAGE,
  payload
});
