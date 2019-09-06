import { useSelector } from "react-redux";
import { AppState, Data, Groups } from "../utils/types";
import _ from "lodash";

export function useHeaderFooterGroups(
  datas: Data[]
): [Groups, number, Groups, number] {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);

  let headerGroups: Groups = {};
  let headerGroupsTotal = 0;
  let footerGroups: Groups = {};
  let footerGroupsTotal = 0;

  datas.forEach((data: any) => {
    if (groupVariable !== "NONE") {
      headerGroups[data[groupVariable]] = headerGroups[data[groupVariable]]
        ? headerGroups[data[groupVariable]] + 1
        : 1;
    }
    headerGroupsTotal = headerGroupsTotal + 1;

    if (data.AEBODSYS !== "") {
      footerGroups[data[groupVariable]] = footerGroups[data[groupVariable]]
        ? footerGroups[data[groupVariable]] + 1
        : 1;

      footerGroupsTotal = footerGroupsTotal + 1;
    }
  });

  if (!headerGroups["Screen Failure"]) {
    headerGroups = { ...headerGroups, ...{ "Screen Failure": 0 } };
  }

  if (!footerGroups["Screen Failure"]) {
    footerGroups = { ...footerGroups, ...{ "Screen Failure": 0 } };
  }

  return [headerGroups, headerGroupsTotal, footerGroups, footerGroupsTotal];
}
