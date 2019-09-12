import { AppState } from "../../types";
import { useSelector } from "react-redux";
import * as o from "../../pages/components/checkfilter/checkFilterOptions";
import _ from "lodash";

export const useFilterIsActive = (): [boolean, string[]] => {
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);
  const ageSelected = useSelector((state: AppState) => state.ageRangeSelected);
  const ageRange = useSelector((state: AppState) => state.ageRangeAll);
  const prevalenceSelected = useSelector(
    (state: AppState) => state.prevalenceRangeSelected
  );
  const prevalenceRange = useSelector(
    (state: AppState) => state.prevalenceRangeAll
  );

  const currentCheckFilter = [
    ...serious,
    ...severity,
    ...relationship,
    ...outcome
  ];

  const allCheckFilter = [
    ...o.seriousOptions,
    ...o.severityOptions,
    ...o.relationshipOptions,
    ...o.outcomeOptions
  ];

  const checkFilterActive = _.isEqual(currentCheckFilter, allCheckFilter)
    ? false
    : true;

  const ageFilterActive = _.isEqual(ageRange, ageSelected) ? false : true;
  const prevalenceFilterActive = _.isEqual(prevalenceRange, prevalenceSelected)
    ? false
    : true;

  const checkArray = [
    checkFilterActive.toString(),
    ageFilterActive.toString(),
    prevalenceFilterActive.toString()
  ];

  const isActive = checkArray.includes("true");

  return [isActive, currentCheckFilter];
};
