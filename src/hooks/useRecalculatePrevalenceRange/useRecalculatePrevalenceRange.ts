import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { AppState } from "../../types";
import {
  setPrevalenceFilterRange,
  setPrevalenceFilterSelected
} from "../../store/actions";

export const useRecalculatePrevalenceRange = () => {
  const dispatch = useDispatch();
  const prevalenceFilterRange = useSelector(
    (state: AppState) => state.prevalenceFilterRange
  );
  const prevalenceFilterGroup = useSelector(
    (state: AppState) => state.prevalenceFilterGroup
  );

  const recalculatePrevalenceRange = (
    currentBodyGroups: any,
    value: string
  ) => {
    let highestValue = prevalenceFilterRange![1] || 0;

    const highest: any = _.maxBy(currentBodyGroups, value);
    console.log("highest", highest);
    highestValue = highest[prevalenceFilterGroup];

    dispatch(setPrevalenceFilterRange([0, highestValue]));
    dispatch(setPrevalenceFilterSelected([0, highestValue]));
  };

  return recalculatePrevalenceRange;
};
