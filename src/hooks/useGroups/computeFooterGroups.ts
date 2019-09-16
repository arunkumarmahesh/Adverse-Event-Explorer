export const computeFooterGroups = (
  data: any,
  footerGroupsObj: { [key: string]: number },
  groupVariable: string
) => {
  if (data.AEBODSYS !== "" && groupVariable !== "NONE") {
    footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
      ? footerGroupsObj[data[groupVariable]] + 1
      : 1;
  }
  let ordered: any = {};
  Object.keys(footerGroupsObj)
    .sort()
    .forEach(function(key: string) {
      ordered[key] = footerGroupsObj[key];
    });
  return ordered;
};
