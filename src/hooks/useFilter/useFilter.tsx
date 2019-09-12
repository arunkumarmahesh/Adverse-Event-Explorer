import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, Data, GroupVariable } from "../../types";
import { SET_FILTERED_DATAS } from "../../store/constants";

export function useFilter(datas: Data[]) {
  const dispatch = useDispatch();
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);
  const ageRangeSelected = useSelector(
    (state: AppState) => state.ageRangeSelected
  );
  const ageRangeAll = useSelector((state: AppState) => state.ageRangeAll);

  // merge current filter values
  const currentFilter = [...serious, ...severity, ...relationship, ...outcome];

  const filteredDatas: Data[] = datas.filter((data: any) => {
    if (ageRangeSelected !== ageRangeAll) {
      if (data.AGE < ageRangeSelected[0] || data.AGE > ageRangeSelected[1]) {
        return;
      }
    }

    // merge data values
    const dataValues = [
      data["AESER"],
      data["AESEV"],
      data["AEREL"],
      data["AEOUT"]
    ];

    let add = true;

    dataValues.forEach(item => {
      // TODO: clearify how to handle datasets with missing values
      if (!currentFilter.includes(item) && item !== "") {
        add = false;
      }
    });

    return add && data;
  });
  useEffect(() => {
    dispatch({ type: SET_FILTERED_DATAS, payload: filteredDatas });
  }, [filteredDatas]);

  return filteredDatas;
}
