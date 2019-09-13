import { useSelector } from "react-redux";
import { AppState } from "../../types";
import _ from "lodash";

export function useGroupsSub(key: String) {
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const headerValues = useSelector((state: AppState) => state.headerValues);

  const unordered = _.chain(datasOriginal)
    .filter(data => data.AEBODSYS === key)
    .groupBy("AEDECOD")
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
