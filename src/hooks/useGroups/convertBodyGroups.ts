import { computePercentage } from "./computePercentage";
import _ from "lodash";

export const convertBodyGroups = (
  bodyGroupsObj: any,
  headerGroupsObj: any,
  headerGroupsObjZero: any,
  headerGroupsTotal: number
) => {
  const bodyGroups: any = Object.entries(bodyGroupsObj).map(function(
    category: any
  ) {
    // compute total adverses of this category
    const categoryTotal = _(category[1])
      .map()
      .sum();

    const precentageTotal = computePercentage(categoryTotal, headerGroupsTotal);

    // add groups with zero values
    const groupsFilled: any = {
      ...headerGroupsObjZero,
      ...category[1]
    };

    const groupsFilledArr = Object.entries(groupsFilled).map(group => {
      return {
        name: group[0],
        value: group[1],
        total: headerGroupsObj[group[0]],
        percentage: computePercentage(
          group[1] as number,
          headerGroupsObj[group[0]]
        )
      };
    });
    groupsFilledArr.push({
      name: "Total",
      value: categoryTotal,
      total: headerGroupsTotal,
      percentage: computePercentage(categoryTotal, headerGroupsTotal)
    });

    return {
      name: category[0],
      groups: groupsFilledArr,
      percentage: precentageTotal
    };
  });
};
