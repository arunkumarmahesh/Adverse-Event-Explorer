import * as t from "../utils/types";
import * as c from "./constants";

export const SetSummarizedBy = (payload: t.SummarizedBy): t.SetSummarizedBy => {
  return {
    type: c.SET_SUMMARIZED_BY,
    payload
  };
};

export const setGroupVariable = (
  payload: t.GroupVariable
): t.SetGroupVariable => {
  return {
    type: c.SET_GROUP_VARIABLE,
    payload
  };
};

export const setPrevalenceRange = (
  payload: [number, number]
): t.SetPrevalenceRange => {
  return {
    type: c.SET_PREVALENCE_RANGE,
    payload
  };
};

export const setAgeRange = (payload: [number, number]): t.SetAgeRange => {
  return {
    type: c.SET_AGE_RANGE,
    payload
  };
};

export const setSerious = (payload: t.Serious): t.SetSerious => {
  return {
    type: c.SET_SERIOUS,
    payload
  };
};

export const setSeverity = (payload: t.Severity): t.SetSeverity => {
  return {
    type: c.SET_SEVERITY,
    payload
  };
};

export const setRelationship = (payload: t.Relationship): t.SetRelationship => {
  return {
    type: c.SET_RELATIONSHIP,
    payload
  };
};

export const setOutcome = (payload: t.Outcome): t.SetOutcome => {
  return {
    type: c.SET_OUTCOME,
    payload
  };
};
