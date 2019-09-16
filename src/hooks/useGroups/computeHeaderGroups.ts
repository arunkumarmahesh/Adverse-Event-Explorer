import _ from "lodash";

export const computeHeaderGroups = (
  data: any,
  headerGroupsObj: any,
  groupVariable: any
) => {
  if (groupVariable !== "NONE") {
    headerGroupsObj[data[groupVariable]] = headerGroupsObj[data[groupVariable]]
      ? headerGroupsObj[data[groupVariable]] + 1
      : 1;
  }

  let ordered: any = {};
  Object.keys(headerGroupsObj)
    .sort()
    .forEach(function(key: string) {
      ordered[key] = headerGroupsObj[key];
    });
  return ordered;
};
