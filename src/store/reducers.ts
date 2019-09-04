import produce from "immer";
import { Reducer } from "redux";
import {
  initialState,
  AppState,
  Serious,
  Severity,
  Relationship,
  Outcome
} from "./initialState";
import {
  ActionTypes,
  SET_SUMMARIZED_BY,
  SET_GROUP_VARIABLE,
  SET_SERIOUS,
  SET_SEVERITY,
  SET_RELATIONSHIP,
  SET_OUTCOME
} from "./actions";

const addOrRemoveItem = <T>(array: T[], value: T): T[] => {
  if (array.includes(value)) {
    return array.filter(item => item !== value);
  } else {
    return [...array, value];
  }
};

export const reducer: Reducer<AppState, ActionTypes> = produce(
  (draft: AppState = initialState, action: ActionTypes) => {
    switch (action.type) {
      case SET_SUMMARIZED_BY:
        draft.summarizedBy = action.payload;
        return draft;
      case SET_GROUP_VARIABLE:
        draft.groupVariable = action.payload;
        return draft;
      case SET_SERIOUS:
        draft.serious = addOrRemoveItem<Serious>(draft.serious, action.payload);
        return draft;
      case SET_SEVERITY:
        draft.severity = addOrRemoveItem<Severity>(
          draft.severity,
          action.payload
        );
        return draft;
      case SET_RELATIONSHIP:
        draft.relationship = addOrRemoveItem<Relationship>(
          draft.relationship,
          action.payload
        );
        return draft;
      case SET_OUTCOME:
        draft.outcome = addOrRemoveItem<Outcome>(draft.outcome, action.payload);
        return draft;
      default:
        return draft;
    }
  }
);
