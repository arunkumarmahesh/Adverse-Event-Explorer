import { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppState, Data } from "../../types";
import { useFilterIsActive } from "..";

export function useFilter(datas: Data[]) {
  const [isActive, currentCheckFilter] = useFilterIsActive();

  const ageFilterSelected = useSelector(
    (state: AppState) => state.ageFilterSelected
  );

  const ageFilterRange = useSelector((state: AppState) => state.ageFilterRange);

  const setFilter = () => {
    if (isActive) {
      let count = 0;
      const filteredDatas: Data[] = datas.filter(data => {
        let isWithinSelectedAge = true;
        if (ageFilterSelected) {
          if (
            data.AGE >= ageFilterSelected[0] &&
            data.AGE <= ageFilterSelected[1]
          ) {
            count++;
          } else {
            isWithinSelectedAge = false;
          }
        }

        if (isWithinSelectedAge) {
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
        }
      });

      return filteredDatas;
    }
    return datas;
  };

  return useMemo(() => setFilter(), [
    ageFilterSelected,
    isActive,
    currentCheckFilter,
    datas
  ]);
}
