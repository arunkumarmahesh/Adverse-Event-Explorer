import { useSelector } from "react-redux";
import { AppState, Data, Groups } from "../utils/types";
import _ from "lodash";

export function useHeaderGroups(datas: Data[]): [Groups, number] {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);

  const headerGroups: Groups = {};
  let total = 0;

  datas.forEach((data: Data) => {
    if (groupVariable !== "NONE") {
      headerGroups[data[groupVariable]] = headerGroups[data[groupVariable]]
        ? headerGroups[data[groupVariable]] + 1
        : 1;
    }
    total = total + 1;
  });
  // console.log("headerGroups total", headerGroups["Total"]);
  return [headerGroups, total];
}
