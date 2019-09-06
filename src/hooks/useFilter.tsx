import { useSelector } from "react-redux";
import { AppState, Data } from "../utils/types";

export function useFilter(datas: Data[]) {
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);

  // merge current filter values
  const currentFilter = [...serious, ...severity, ...relationship, ...outcome];

  const filteredDatas: Data[] = datas.filter((data: any) => {
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
  return filteredDatas;
}
