import _ from "lodash";
import { computePercentage } from "./computePercentage";
import { convertBodyGroupsSub } from "./convertBodyGroupsSub";

export const convertBodyGroups = (
  bodyGroupsObj: any,
  headerGroupsObj: any,
  headerGroupsObjZero: any,
  headerGroupsTotal: number
) => {
  const bodyGroups = Object.entries(bodyGroupsObj).map((category: any) => {
    // compute total adverses of this category
    const categoryTotal = _(category[1].groups)
      .map()
      .sum();

    // add groups with zero values
    const groupsFilledObj: any = {
      ...headerGroupsObjZero,
      ...category[1].groups
    };

    // convert groups to array and add datas
    const groupsFilled = Object.entries(groupsFilledObj).map(group => {
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
    // add group total values
    groupsFilled.push({
      name: "Total",
      value: categoryTotal,
      total: headerGroupsTotal,
      percentage: computePercentage(categoryTotal, headerGroupsTotal)
    });

    return {
      name: category[0],
      groups: groupsFilled,
      percentage: computePercentage(categoryTotal, headerGroupsTotal),
      subCategories: convertBodyGroupsSub(
        category[1].subCategories,
        headerGroupsObj,
        headerGroupsObjZero,
        headerGroupsTotal
      )
    };
  });

  return bodyGroups;
};
