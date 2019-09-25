import { useSelector } from "react-redux";
import { AppState } from "../../types";

export const usePrevalenceFilter = (datas: any) => {
  const prevalenceSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );

  const prevalenceGroup = useSelector(
    (state: AppState) => state.prevalenceFilterGroup
  );

  const filterByPrevalence = (datas: any) => {
    let filteredDatas: any = undefined;
    if (prevalenceSelected)
      filteredDatas = datas.filter((data: any) => {
        let add = true;

        if (
          data[prevalenceGroup] > prevalenceSelected[1] ||
          data[prevalenceGroup] < prevalenceSelected[0]
        ) {
          add = false;
        }

        return add && data;
      });
    return filteredDatas || datas;
  };

  return filterByPrevalence(datas);
};
