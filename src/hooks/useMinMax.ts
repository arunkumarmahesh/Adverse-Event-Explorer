import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as c from "../store/constants";
import { AppState } from "../types";
import { Data } from "../types";
import _ from "lodash";

export function useMinMax(mainGroups: any) {
  const dispatch = useDispatch();
  let groupsHeighestValue = 0;
  let groupsLowestValue = 1000;

  Object.entries(mainGroups).forEach((items: any) => {
    Object.values(items[1]).forEach((value: any) => {
      if (value > groupsHeighestValue && items[0] !== "") {
        groupsHeighestValue = value;
        groupsLowestValue = value;
      }
      if (value < groupsLowestValue && items[0] !== "") {
        groupsLowestValue = value;
      }
    });
  });

  useEffect(() => {
    dispatch({
      type: c.SET_PREVALENCE_RANGE_ALL,
      payload: [groupsLowestValue, groupsHeighestValue]
    });
    dispatch({
      type: c.SET_PREVALENCE_RANGE_SELECTED,
      payload: [groupsLowestValue, groupsHeighestValue]
    });
  }, [[groupsLowestValue, groupsHeighestValue]]);
}
