import produce from "immer";
import { Reducer } from "redux";
import _ from "lodash";
import { initialState } from "./initialState";
import * as t from "../types";
import * as c from "./constants";

const addOrRemoveFilterItem = <T>(array: T[], value: T): T[] => {
  if (array.includes(value)) {
    return array.filter(item => item !== value);
  } else {
    return [...array, value];
  }
};

/* const addOrRemoveSortColumn = (obj: t.DetailSort | {}, value: t.DetailSort) => {
  if (_.includes(obj, value[0])) {
    return _.filter(obj, item => item[0] !== value[0]);
  } else {
    return { ...obj, ...value };
  }
}; */

export const reducer: Reducer<t.AppState, t.ActionTypes> = produce(
  (draft: t.AppState = initialState, action: t.ActionTypes) => {
    switch (action.type) {
      case c.SET_HEADER_VALUES:
        draft.headerValues = action.payload;
        return draft;
      case c.SET_FOOTER_VALUES:
        draft.headerValues = action.payload;
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
      case c.SET_PREVALENCE_RANGE_ALL:
        draft.prevalenceRangeAll = action.payload;
        return draft;
      case c.SET_PREVALENCE_RANGE_SELECTED:
        draft.prevalenceRangeSelected = action.payload;
        return draft;
      case c.SET_AGE_RANGE_ALL:
        draft.ageRangeAll = action.payload;
        return draft;
      case c.SET_AGE_RANGE_SELECTED:
        draft.ageRangeSelected = action.payload;
        return draft;
      case c.SET_SERIOUS:
        draft.serious = addOrRemoveFilterItem<t.Serious>(
          draft.serious,
          action.payload
        );
        return draft;
      case c.SET_SEVERITY:
        draft.severity = addOrRemoveFilterItem<t.Severity>(
          draft.severity,
          action.payload
        );
        return draft;
      case c.SET_RELATIONSHIP:
        draft.relationship = addOrRemoveFilterItem<t.Relationship>(
          draft.relationship,
          action.payload
        );
        return draft;
      case c.SET_OUTCOME:
        draft.outcome = addOrRemoveFilterItem<t.Outcome>(
          draft.outcome,
          action.payload
        );
        return draft;
      case c.SET_DETAIL_DATAS:
        draft.detailDatas[action.key] = action.payload;
        return draft;
      case c.SET_DETAIL_SORT:
        draft.detailSort = action.payload;
        return draft;
      default:
        return draft;
    }
  }
);
