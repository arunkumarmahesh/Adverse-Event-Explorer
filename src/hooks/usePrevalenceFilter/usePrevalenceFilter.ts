import { useSelector } from "react-redux";
import { AppState } from "../../types";

export const usePrevalenceFilter = (datas: any) => {
  const prevalenceFilterSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );

  const prevalenceFilterGroup = useSelector(
    (state: AppState) => state.prevalenceFilterGroup
  );

  const filteredDatas: any = datas.filter((data: any) => {
    let add = true;

    if (prevalenceFilterSelected) {
      if (data[prevalenceFilterGroup] > prevalenceFilterSelected[1]) {
        add = false;
      }
    }

    return add && data;
  });

  return filteredDatas;
};