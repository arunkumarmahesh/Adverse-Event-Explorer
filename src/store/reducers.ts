import produce from "immer";
import { Reducer } from "redux";
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
      case c.SET_GROUP_VARIABLE:
        draft.groupVariable = action.payload;
        return draft;
      case c.SET_SORT_COLUMNS:
        draft.sortColumns = action.payload;
        return draft;
      case c.SET_PREVALENCE_FILTER_RANGE:
        draft.prevalenceFilterRange = action.payload;
        return draft;
      case c.SET_PREVALENCE_FILTER_SELECTED:
        draft.prevalenceFilterSelected = action.payload;
        return draft;
      case c.SET_PREVALENCE_FILTER_GROUP:
        draft.prevalenceFilterGroup = action.payload;
        return draft;
      case c.SET_AGE_FILTER_RANGE:
        draft.ageFilterRange = action.payload;
        return draft;
      case c.SET_AGE_FILTER_SELECTED:
        draft.ageFilterSelected = action.payload;
        return draft;
      case c.SET_SERIOUS_FILTER:
        draft.seriousFilter = addOrRemoveArrayItem<t.SeriousFilter>(
          draft.seriousFilter,
          action.payload
        );
        return draft;
      case c.SET_SEVERITY_FILTER:
        draft.severityFilter = addOrRemoveArrayItem<t.SeverityFilter>(
          draft.severityFilter,
          action.payload
        );
        return draft;
      case c.SET_RELATIONSHIP_FILTER:
        draft.relationshipFilter = addOrRemoveArrayItem<t.RelationshipFilter>(
          draft.relationshipFilter,
          action.payload
        );
        return draft;
      case c.SET_OUTCOME_FILTER:
        draft.outcomeFilter = addOrRemoveArrayItem<t.OutcomeFilter>(
          draft.outcomeFilter,
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
        draft.detailSortColumn = action.payload;
        return draft;
      case c.SET_DETAIL_RESULTS_PER_PAGE:
        draft.detailResultsPerPage = action.payload;
        return draft;
      default:
        return draft;
    }
  }
);
