import { useSelector } from "react-redux";
import { AppState, Data, Groups } from "../utils/types";
import _ from "lodash";

export function useBodySubGroups(key: String, headerGroups: Groups) {
  const datas = useSelector((state: AppState) => state.datas);
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const headerGroupsZero = _.mapValues(headerGroups, () => 0);

  const unordered = _.chain(datas)
    .filter(data => data.AEBODSYS === key)
    .groupBy("AEDECOD")
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

  return ordered;
}
