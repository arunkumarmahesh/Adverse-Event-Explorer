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

  // sort keys to keep always the same order even when filtering
  // otherwise the order depends on the order of the recieved data groups which depending on filter setttings
  // the correct ordering of bodyGroups depends on the correct ordering of the headergroups
  let ordered: any = {};
  Object.keys(headerGroupsObj)
    .sort()
    .forEach(function(key: string) {
      ordered[key] = headerGroupsObj[key];
    });
  return ordered;
};
