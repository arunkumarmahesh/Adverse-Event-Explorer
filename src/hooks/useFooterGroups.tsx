import { useSelector } from "react-redux";
import { AppState, Data, Groups } from "../utils/types";
import _ from "lodash";

export function useFooterGroups(datas: Data[]): [Groups, number] {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);

  let footerGroups: Groups = {};
  let footerGroupsTotal = 0;

  datas.forEach((data: any) => {
    if (data.AEBODSYS !== "") {
      footerGroups[data[groupVariable]] = footerGroups[data[groupVariable]]
        ? footerGroups[data[groupVariable]] + 1
        : 1;

      footerGroupsTotal = footerGroupsTotal + 1;
    }
  });

  if (!footerGroups["Screen Failure"]) {
    footerGroups = { ...footerGroups, ...{ "Screen Failure": 0 } };
  }

  return [footerGroups, footerGroupsTotal];
}
