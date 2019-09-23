import _ from "lodash";
import { SortColumn } from "../../types";

export function sortGroups(datas: any, sortColumns: SortColumn[]) {
  if (sortColumns.length > 0) {
    const sortedDatas = _.orderBy(
      datas,
      _.map(sortColumns, item => {
        const fn = (o: any) => {
          return new Number(o[item.name]); // eslint-disable-line
        };
        return fn;
      }),
      _.map(sortColumns, "direction")
    );

    return sortedDatas;
  } else {
    return _.orderBy(
      datas,
      [
        function(o: any) {
          return new Number(o["Total"]); // eslint-disable-line
        },
        "name"
      ],
      ["desc", "asc"]
    );
  }
}
