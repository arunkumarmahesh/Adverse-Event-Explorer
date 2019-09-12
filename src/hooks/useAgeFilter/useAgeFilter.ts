import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types";
import * as c from "../../store/constants";

export const useAgeFilter = () => {
  const dispatch = useDispatch();
  const ageRange = useSelector((state: AppState) => state.ageRangeAll);
  const ageSelected = useSelector((state: AppState) => state.ageRangeSelected);

  const ageFilterOptions: any = {
    label: "Filter by age:",
    selected: ageSelected,
    range: ageRange,
    discrete: true,
    multiple: true,
    hangleChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_AGE_RANGE_SELECTED,
        payload: value
      });
    }
  };

  return ageFilterOptions;
};
