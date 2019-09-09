import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { AppState, Data, Groups } from "../types";
import * as c from "../store/constants";

export function useHeaderFooterGroups(datas: Data[]): void {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const dispatch = useDispatch();

  let headerGroups: Groups = {};
  let headerGroupsTotal = 0;
  let footerGroups: Groups = {};
  let footerGroupsTotal = 0;
  let maxAge = 0;
  let minAge = 100;

  datas.forEach((data: any) => {
    if (groupVariable !== "NONE") {
      headerGroups[data[groupVariable]] = headerGroups[data[groupVariable]]
        ? headerGroups[data[groupVariable]] + 1
        : 1;
    }
    headerGroupsTotal = headerGroupsTotal + 1;

    if (data.AEBODSYS !== "") {
      footerGroups[data[groupVariable]] = footerGroups[data[groupVariable]]
        ? footerGroups[data[groupVariable]] + 1
        : 1;

      footerGroupsTotal = footerGroupsTotal + 1;
    }
    if (data.AGE > maxAge) {
      maxAge = data.AGE;
    }
    if (data.AGE < minAge) {
      minAge = data.AGE;
    }
  });

  if (!headerGroups["Screen Failure"]) {
    headerGroups = { ...headerGroups, ...{ "Screen Failure": 0 } };
  }

  if (!footerGroups["Screen Failure"]) {
    footerGroups = { ...footerGroups, ...{ "Screen Failure": 0 } };
  }

  const headerValues = {
    groups: headerGroups,
    total: headerGroupsTotal
  };

  const footerValues = {
    groups: footerGroups,
    total: footerGroupsTotal
  };

  useEffect(() => {
    dispatch({ type: c.SET_HEADER_VALUES, payload: headerValues });
    dispatch({ type: c.SET_FOOTER_VALUES, payload: footerValues });
    dispatch({ type: c.SET_AGE_RANGE_ALL, payload: [minAge, maxAge] });
    dispatch({ type: c.SET_AGE_RANGE_SELECTED, payload: [minAge, maxAge] });
  }, [minAge, maxAge]);
}
