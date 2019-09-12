import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types";
import * as c from "../../store/constants";

export const usePrevalenceFilter = () => {
  const dispatch = useDispatch();
  const prevalenceRange = useSelector(
    (state: AppState) => state.prevalenceRangeAll
  );
  const prevalenceSelected = useSelector(
    (state: AppState) => state.prevalenceRangeSelected
  );

  const prevalenceFilterOptions: any = {
    label: "Filter by prevalence:",
    selected: prevalenceSelected,
    range: prevalenceRange,
    discrete: true,
    multiple: true,
    hangleChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_AGE_RANGE_SELECTED,
        payload: value
      });
    }
  };

  return prevalenceFilterOptions;
};
