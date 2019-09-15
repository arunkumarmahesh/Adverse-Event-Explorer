import { AppState } from "../../types";
import { useSelector } from "react-redux";
import * as o from "../../pages/components/checkfilter/checkFilterOptions";
import _ from "lodash";

export const useFilterIsActive = (): [boolean, string[]] => {
  const serious = useSelector((state: AppState) => state.seriousFilter);
  const severity = useSelector((state: AppState) => state.severityFilter);
  const relationship = useSelector(
    (state: AppState) => state.relationshipFilter
  );
  const outcome = useSelector((state: AppState) => state.outcomeFilter);
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
    ...o.seriousFilterOptions,
    ...o.severityFilterOptions,
    ...o.relationshipFilterOptions,
    ...o.outcomeFilterOptions
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
