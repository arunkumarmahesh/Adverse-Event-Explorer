import { useSelector, useDispatch } from "react-redux";
import { AppState, Data } from "../../types";
import { SET_FILTERED_DATAS } from "../../store/constants";
import { useFilterIsActive } from "..";

export function useFilter(datas: Data[]) {
  const dispatch = useDispatch();
  const [isActive, currentCheckFilter] = useFilterIsActive();
  const ageRangeSelected = useSelector(
    (state: AppState) => state.ageRangeSelected
  );
  const ageRangeAll = useSelector((state: AppState) => state.ageRangeAll);

  if (isActive) {
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
        if (!currentCheckFilter.includes(item) && item !== "") {
          add = false;
        }
      });

      return add && data;
    });

    dispatch({ type: SET_FILTERED_DATAS, payload: filteredDatas });

    return filteredDatas;
  }

  return datas;
}
