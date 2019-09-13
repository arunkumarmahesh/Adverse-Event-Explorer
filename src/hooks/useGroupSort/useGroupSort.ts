import { useSelector } from "react-redux";
import { AppState, Data } from "../../types";
import _ from "lodash";

export function useMainGroups(datas: Data[]) {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const headerValues = useSelector((state: AppState) => state.headerValues);

  const unordered = _.chain(datas)
    .groupBy("AEBODSYS")
    .mapValues(value => {
      const merged = {
        ..._.mapValues(headerValues, () => 0),
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

  return ordered;
}
