import * as t from "../types";
import * as c from "./constants";

export const setSummarizedDatas = (
  payload: t.GroupedDatas
): t.SetSummarizedDatas => ({
  type: c.SET_SUMMARIZED_DATAS,
  payload
});

export const setSearchedDatas = (
  payload: t.GroupedDatas
): t.SetSearchedDatas => ({
  type: c.SET_SEARCHED_DATAS,
  payload
});

export const setFilteredDatas = (
  payload: t.GroupedDatas
): t.SetFilteredDatas => ({
  type: c.SET_FILTERED_DATAS,
  payload
});

export const setHeaderValues = (
  payload: t.GroupedValues
): t.SetHeaderValues => ({
  type: c.SET_HEADER_VALUES,
  payload
});

export const setFooterValues = (
  payload: t.GroupedValues
): t.SetFooterValues => ({
  type: c.SET_FOOTER_VALUES,
  payload
});

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

export const setPrevalenceRangeAll = (
  payload: [number, number]
): t.SetPrevalenceRangeAll => ({
  type: c.SET_PREVALENCE_RANGE_ALL,
  payload
});

export const setPrevalenceRangeSelected = (
  payload: [number, number]
): t.SetPrevalenceRangeSelected => ({
  type: c.SET_PREVALENCE_RANGE_SELECTED,
  payload
});

export const setAgeRangeAll = (
  payload: [number, number]
): t.SetAgeRangeAll => ({
  type: c.SET_AGE_RANGE_ALL,
  payload
});

export const setAgeRangeSelected = (
  payload: [number, number]
): t.SetAgeRangeSelected => ({
  type: c.SET_AGE_RANGE_SELECTED,
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
