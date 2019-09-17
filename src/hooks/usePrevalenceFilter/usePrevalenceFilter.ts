import { useSelector } from "react-redux";
import { AppState } from "../../types";

export const usePrevalenceFilter = (datas: any) => {
  const prevalenceFilterSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );
  const filteredDatas: any = datas.filter((data: any) => {
    let add = true;

    if (prevalenceFilterSelected) {
      if (
        data["highestPrevalence"] < prevalenceFilterSelected[0] ||
        data["highestPrevalence"] > prevalenceFilterSelected[1]
      ) {
        add = false;
      }
    }

    return add && data;
  });

  return filteredDatas;
};
