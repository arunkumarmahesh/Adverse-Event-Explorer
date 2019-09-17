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

export const setSortColumn = (payload: t.SortColumn[]): t.SetSortColumn => ({
  type: c.SET_SORT_COLUMNS,
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

export const setPrevalenceFilterGroup = (
  payload: string
): t.SetPrevalenceFilterGroup => ({
  type: c.SET_PREVALENCE_FILTER_GROUP,
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

export const setSeriousFilter = (
  payload: t.SeriousFilter
): t.SetSeriousFilter => ({
  type: c.SET_SERIOUS_FILTER,
  payload
});

export const setSeverityFilter = (
  payload: t.SeverityFilter
): t.SetSeverityFilter => ({
  type: c.SET_SEVERITY_FILTER,
  payload
});

export const setRelationship = (
  payload: t.RelationshipFilter
): t.SetRelationshipFilter => ({
  type: c.SET_RELATIONSHIP_FILTER,
  payload
});

export const setOutcome = (payload: t.OutcomeFilter): t.SetOutcomeFilter => ({
  type: c.SET_OUTCOME_FILTER,
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

export const setDetailSortColumn = (
  payload: t.SortColumn[]
): t.SetDetailSortColumn => ({
  type: c.SET_DETAIL_SORT_COLUMNS,
  payload
});

export const setDetailPagesResultsPerPage = (
  payload: number
): t.SetDetailResultsPerPage => ({
  type: c.SET_DETAIL_RESULTS_PER_PAGE,
  payload
});
