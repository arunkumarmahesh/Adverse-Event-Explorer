import _ from "lodash";
import { computePercentage } from "./computePercentage";
import { sortGroups } from "./sortGroups";

export const convertBodyGroupsSub = (
  subCategories: any,
  headerGroupsObj: any,
  headerGroupsObjZero: any,
  headerGroupsTotal: number
) => {
  const bodyGroupsSub = Object.entries(subCategories).map(
    (subCategory: any) => {
      // compute total adverses of this category
      const subCategoryTotal = _(subCategory[1])
        .map()
        .sum();

      // add groups with zero values
      const groupsFilledObj: any = {
        ...headerGroupsObjZero,
        ...subCategory[1]
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
        value: subCategoryTotal,
        total: headerGroupsTotal,
        percentage: computePercentage(subCategoryTotal, headerGroupsTotal)
      });

      return {
        name: subCategory[0],
        groups: groupsFilled,
        percentage: computePercentage(subCategoryTotal, headerGroupsTotal)
      };
    }
  );

  return sortGroups(bodyGroupsSub);
};
