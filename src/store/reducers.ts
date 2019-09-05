import produce from "immer";
import { Reducer } from "redux";
import { initialState } from "./initialState";
import * as t from "../utils/types";
import * as c from "./constants";

const addOrRemoveItem = <T>(array: T[], value: T): T[] => {
  if (array.includes(value)) {
    return array.filter(item => item !== value);
  } else {
    return [...array, value];
  }
};

export const reducer: Reducer<t.AppState, t.ActionTypes> = produce(
  (draft: t.AppState = initialState, action: t.ActionTypes) => {
    switch (action.type) {
      case c.SET_SUMMARIZED_BY:
        draft.summarizedBy = action.payload;
        return draft;
      case c.SET_GROUP_VARIABLE:
        draft.groupVariable = action.payload;
        return draft;
      case c.SET_SERIOUS:
        draft.serious = addOrRemoveItem<t.Serious>(
          draft.serious,
          action.payload
        );
        return draft;
      case c.SET_SEVERITY:
        draft.severity = addOrRemoveItem<t.Severity>(
          draft.severity,
          action.payload
        );
        return draft;
      case c.SET_RELATIONSHIP:
        draft.relationship = addOrRemoveItem<t.Relationship>(
          draft.relationship,
          action.payload
        );
        return draft;
      case c.SET_OUTCOME:
        draft.outcome = addOrRemoveItem<t.Outcome>(
          draft.outcome,
          action.payload
        );
        return draft;
      default:
        return draft;
    }
  }
);