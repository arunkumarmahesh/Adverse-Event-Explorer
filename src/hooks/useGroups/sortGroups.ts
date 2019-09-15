import _ from "lodash";

export function sortGroups(datas: any) {
  return _.orderBy(
    datas,
    [
      function(o: any) {
        return new Number(o["Total"]);
      },
      "name"
    ],
    ["desc", "asc"]
  );
}
