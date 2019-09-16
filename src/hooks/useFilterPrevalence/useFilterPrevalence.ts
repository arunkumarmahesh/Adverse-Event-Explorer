import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types";
import * as c from "../../store/constants";

export const useFilterPrevalence = (prevalenceRange: [number, number]) => {
  const dispatch = useDispatch();

  const prevalenceFilterSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );

  const prevalenceFilterOptions: any = {
    label: "Filter by prevalence:",
    selected: prevalenceFilterSelected,
    range: prevalenceRange,
    discrete: true,
    multiple: true,
    hangleChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_PREVALENCE_FILTER_SELECTED,
        payload: value
      });
    }
  };

  return prevalenceFilterOptions;
};
