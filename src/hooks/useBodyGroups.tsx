import { useSelector } from "react-redux";
import { AppState, Data, Groups } from "../utils/types";
import _ from "lodash";

export function useBodyGroups(datas: Data[], headerGroups: Groups) {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const headerGroupsZero = _.mapValues(headerGroups, () => 0);

  const unordered = _.chain(datas)
    .groupBy("AEBODSYS")
    .mapValues(value => {
      const merged = {
        ...headerGroupsZero,
        ..._.countBy(value, groupVariable)
      };
      return merged;
    })
    .value();

  const ordered: { [key: string]: {} } = {};
  _(unordered)
    .keys()
    .sort()
    .each(function(key) {
      ordered[key] = unordered[key];
    });
  console.log("***", ordered);
  return ordered;
}
