import { useMemo } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { AppState } from "../../types";

export const usePrevalenceFilter = (datas: any) => {
  const prevalenceFilterSelected = useSelector(
    (state: AppState) => state.prevalenceFilterSelected
  );
  const prevalenceFilterRange = useSelector(
    (state: AppState) => state.prevalenceFilterRange
  );

  const prevalenceFilterGroup = useSelector(
    (state: AppState) => state.prevalenceFilterGroup
  );

  let filteredDatas: any = undefined;

  if (!_.isEqual(prevalenceFilterRange, prevalenceFilterSelected)) {
    filteredDatas = datas.filter((data: any) => {
      let add = true;

      if (prevalenceFilterSelected) {
        if (data[prevalenceFilterGroup] > prevalenceFilterSelected[1]) {
          add = false;
        }
      }

      return add && data;
    });
  }

  return filteredDatas || datas;
};
