export const convertFooterGroups = (
  footerGroupsObj: any,
  footerGroupsTotal: number,
  headerGroupsTotal: number
) => {
  const footerGroups: any = Object.entries(footerGroupsObj).map(values => ({
    name: values[0],
    value: values[1],
    total: footerGroupsTotal
  }));
  footerGroups.push({
    name: "Total",
    value: footerGroupsTotal,
    total: headerGroupsTotal
  });

  return footerGroups;
};
