export const computeFooterGroups = (
  data: any,
  footerGroupsObj: any,
  groupVariable: string,
  footerGroupsTotal: number
) => {
  if (data.AEBODSYS !== "" && groupVariable !== "NONE") {
    footerGroupsObj[data[groupVariable]] = footerGroupsObj[data[groupVariable]]
      ? footerGroupsObj[data[groupVariable]] + 1
      : 1;
  }
  if (data.AEBODSYS !== "") {
    footerGroupsTotal = footerGroupsTotal + 1;
  }
  if (groupVariable === "ARM" && !footerGroupsObj["Screen Failure"]) {
    footerGroupsObj = { ...footerGroupsObj, ...{ "Screen Failure": 0 } };
  }

  return [footerGroupsObj, footerGroupsTotal];
};
