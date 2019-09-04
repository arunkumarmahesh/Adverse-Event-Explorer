import * as types from "./initialState";

export const SET_SUMMARIZED_BY = "SET_SUMMARIZED_BY";
export const SET_GROUP_VARIABLE = "SET_GROUP_VARIABLE";
export const SET_SERIOUS = "SET_SERIOUS";
export const SET_SEVERITY = "SET_SEVERITY";
export const SET_RELATIONSHIP = "SET_RELATIONSHIP";
export const SET_OUTCOME = "SET_OUTCOME";

export type ActionTypes =
  | SetSummarizedBy
  | SetGroupVariable
  | SetSerious
  | SetSeverity
  | SetRelationship
  | SetOutcome;

export interface SetSummarizedBy {
  type: typeof SET_SUMMARIZED_BY;
  payload: types.SummarizedBy;
}

export const SetSummarizedBy = (
  payload: types.SummarizedBy
): SetSummarizedBy => {
  return {
    type: SET_SUMMARIZED_BY,
    payload
  };
};

export interface SetGroupVariable {
  type: typeof SET_GROUP_VARIABLE;
  payload: types.GroupVariable;
}

export const setGroupVariable = (
  payload: types.GroupVariable
): SetGroupVariable => {
  return {
    type: SET_GROUP_VARIABLE,
    payload
  };
};

export interface SetSerious {
  type: typeof SET_SERIOUS;
  payload: types.Serious;
}

export const setSerious = (payload: types.Serious): SetSerious => {
  return {
    type: SET_SERIOUS,
    payload
  };
};

export interface SetSeverity {
  type: typeof SET_SEVERITY;
  payload: types.Severity;
}

export const setSeverity = (payload: types.Severity): SetSeverity => {
  return {
    type: SET_SEVERITY,
    payload
  };
};

export interface SetRelationship {
  type: typeof SET_RELATIONSHIP;
  payload: types.Relationship;
}

export const setRelationship = (
  payload: types.Relationship
): SetRelationship => {
  return {
    type: SET_RELATIONSHIP,
    payload
  };
};

export interface SetOutcome {
  type: typeof SET_OUTCOME;
  payload: types.Outcome;
}

export const setOutcome = (payload: types.Outcome): SetOutcome => {
  return {
    type: SET_OUTCOME,
    payload
  };
};
