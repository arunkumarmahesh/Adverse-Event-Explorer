import { computePercentage } from "./computePercentage";

export const convertFooterGroups = (
  footerGroupsObj: any,
  footerGroupsTotal: number,
  headerGroupsTotal: number,
  headerGroupsObj: any
) => {
  const footerGroups: any = Object.entries(footerGroupsObj).map(
    (values: any) => ({
      name: values[0],
      value: values[1],
      total: headerGroupsObj[values[0]],
      percentage: computePercentage(values[1], headerGroupsObj[values[0]])
    })
  );
  footerGroups.push({
    name: "Total",
    value: footerGroupsTotal,
    total: headerGroupsTotal,
    percentage: computePercentage(footerGroupsTotal, headerGroupsTotal)
  });

  return footerGroups;
};
