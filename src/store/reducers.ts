import produce from "immer";
import { Reducer } from "redux";
import _ from "lodash";
import { initialState } from "./initialState";
import * as t from "../types";
import * as c from "./constants";

const addOrRemoveArrayItem = <T>(array: T[], value: T): T[] => {
  if (array.includes(value)) {
    return array.filter(item => item !== value);
  } else {
    return [...array, value];
  }
};

export const reducer: Reducer<t.AppState, t.ActionTypes> = produce(
  (draft: t.AppState = initialState, action: t.ActionTypes) => {
    switch (action.type) {
      case c.SET_SEARCH_TERM:
        draft.searchTerm = action.payload;
        return draft;
      case c.SET_SUMMARIZED_BY:
        draft.summarizedBy = action.payload;
        return draft;
      case c.SET_SUMMARIZED_BY:
        draft.summarizedBy = action.payload;
        return draft;
      case c.SET_GROUP_VARIABLE:
        draft.groupVariable = action.payload;
        return draft;
      case c.SET_PREVALENCE_FILTER_RANGE:
        draft.prevalenceFilterRange = action.payload;
        return draft;
      case c.SET_PREVALENCE_FILTER_SELECTED:
        draft.prevalenceFilterSelected = action.payload;
        return draft;
      case c.SET_AGE_FILTER_RANGE:
        draft.ageFilterRange = action.payload;
        return draft;
      case c.SET_AGE_FILTER_SELECTED:
        draft.ageFilterSelected = action.payload;
        return draft;
      case c.SET_SERIOUS:
        draft.serious = addOrRemoveArrayItem<t.Serious>(
          draft.serious,
          action.payload
        );
        return draft;
      case c.SET_SEVERITY:
        draft.severity = addOrRemoveArrayItem<t.Severity>(
          draft.severity,
          action.payload
        );
        return draft;
      case c.SET_RELATIONSHIP:
        draft.relationship = addOrRemoveArrayItem<t.Relationship>(
          draft.relationship,
          action.payload
        );
        return draft;
      case c.SET_OUTCOME:
        draft.outcome = addOrRemoveArrayItem<t.Outcome>(
          draft.outcome,
          action.payload
        );
        return draft;
      case c.SET_EXPANDED_CATEGORIES:
        draft.expandedCategories = addOrRemoveArrayItem<string>(
          draft.expandedCategories,
          action.payload
        );
        return draft;
      case c.SET_DETAIL_SEARCH_TERM:
        draft.detailSearchTerm = action.payload;
        return draft;
      case c.SET_DETAIL_SORT_COLUMNS:
        draft.detailSortColumns = action.payload;
        return draft;
      case c.SET_DETAIL_RESULTS_PER_PAGE:
        draft.detailResultsPerPage = action.payload;
        return draft;

      default:
        return draft;
    }
  }
);
