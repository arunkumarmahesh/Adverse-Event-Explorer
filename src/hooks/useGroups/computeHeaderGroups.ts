export const computeHeaderGroups = (
  data: any,
  headerGroupsObj: any,
  groupVariable: string,
  headerGroupsTotal: number
) => {
  if (groupVariable !== "NONE") {
    headerGroupsObj[data[groupVariable]] = headerGroupsObj[data[groupVariable]]
      ? headerGroupsObj[data[groupVariable]] + 1
      : 1;
  }

  headerGroupsTotal = headerGroupsTotal + 1;

  if (groupVariable === "ARM" && !headerGroupsObj["Screen Failure"]) {
    headerGroupsObj = { ...headerGroupsObj, ...{ "Screen Failure": 0 } };
  }

  return [headerGroupsObj, headerGroupsTotal];
};
