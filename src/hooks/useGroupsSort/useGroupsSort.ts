import { useSelector } from "react-redux";
import { GroupedValue, Data } from "../../types";
import _ from "lodash";

export function useGroupsSort(datas: any) {
  return _.orderBy(
    datas,
    [
      function(o: any) {
        return new Number(o.percentage);
      },
      "name"
    ],
    ["desc", "asc"]
  );
}
