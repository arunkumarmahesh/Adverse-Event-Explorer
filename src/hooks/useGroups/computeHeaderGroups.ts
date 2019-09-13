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

  return headerGroupsObj;
};
