export const convertHeaderGroups = (
  headerGroupsObj: any,
  headerGroupsTotal: number
) => {
  const headerGroups: any = Object.entries(headerGroupsObj).map(values => ({
    name: values[0],
    value: values[1],
    total: headerGroupsTotal
  }));
  headerGroups.push({
    name: "Total",
    value: headerGroupsTotal,
    total: headerGroupsTotal
  });

  return headerGroups;
};
