import { AppState } from "../../types";
import { useSelector } from "react-redux";
import * as o from "../../pages/components/checkfilter/checkFilterOptions";
import _ from "lodash";

export const useFilterIsActive = (): [boolean, string[]] => {
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);
  const ageFilterRange = useSelector((state: AppState) => state.ageFilterRange);
  const ageFilterSelected = useSelector(
    (state: AppState) => state.ageFilterSelected
  );
  const prevalenceFilterRange = useSelector(
    (state: AppState) => state.prevalenceFilterRange
  );
  const prevalenceFilterSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
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

  const ageFilterActive = _.isEqual(ageFilterRange, ageFilterSelected)
    ? false
    : true;
  const prevalenceFilterActive = _.isEqual(
    prevalenceFilterRange,
    prevalenceFilterSelected
  )
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
