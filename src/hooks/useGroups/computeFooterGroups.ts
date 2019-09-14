export const computeFooterGroups = (
  data: any,
  footerGroupsObj: { [key: string]: number },
  groupVariable: string
) => {
  if (data.AEBODSYS !== "") {
    footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
      ? footerGroupsObj[data[groupVariable]] + 1
      : 1;
  }
  return footerGroupsObj;
};
