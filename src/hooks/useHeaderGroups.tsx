import { useSelector } from "react-redux";
import { AppState, Data, Groups } from "../utils/types";
import _ from "lodash";

export function useHeaderGroups(datas: Data[]): [Groups, number] {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);

  let headerGroups: Groups = {};
  let headerGroupsTotal = 0;

  datas.forEach((data: Data) => {
    if (groupVariable !== "NONE") {
      headerGroups[data[groupVariable]] = headerGroups[data[groupVariable]]
        ? headerGroups[data[groupVariable]] + 1
        : 1;
    }
    headerGroupsTotal = headerGroupsTotal + 1;
  });

  if (!headerGroups["Screen Failure"]) {
    headerGroups = { ...headerGroups, ...{ "Screen Failure": 0 } };
  }

  return [headerGroups, headerGroupsTotal];
}
