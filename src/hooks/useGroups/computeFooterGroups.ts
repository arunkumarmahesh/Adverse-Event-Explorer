export const computeFooterGroups = (
  data: any,
  footerGroupsObj: any,
  groupVariable: any
) => {
  if (data.AEBODSYS !== "") {
    footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
      ? footerGroupsObj[data[groupVariable]] + 1
      : 1;
  }
  return footerGroupsObj;
};
