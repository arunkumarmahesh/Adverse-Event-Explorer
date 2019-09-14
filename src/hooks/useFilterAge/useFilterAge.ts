import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types";
import * as c from "../../store/constants";

export const useFilterAge = () => {
  const dispatch = useDispatch();
  const ageFilterSelected = useSelector(
    (state: AppState) => state.ageFilterSelected
  );
  const ageFilterRange = useSelector((state: AppState) => state.ageFilterRange);

  const ageFilterOptions: any = {
    label: "Filter by age:",
    selected: ageFilterSelected,
    range: ageFilterRange,
    discrete: true,
    multiple: true,
    hangleChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_AGE_FILTER_SELECTED,
        payload: value
      });
    }
  };

  return ageFilterOptions;
};
