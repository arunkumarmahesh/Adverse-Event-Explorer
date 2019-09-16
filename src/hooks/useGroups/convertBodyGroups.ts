import _ from "lodash";
import { computePercentage } from "./computePercentage";
import { convertBodyGroupsSub } from "./convertBodyGroupsSub";
import { SortColumn } from "../../types";

export const convertBodyGroups = (
  bodyGroupsObj: any,
  headerGroupsObj: any,
  headerGroupsObjZero: any,
  headerGroupsTotal: number,
  sortColumns: SortColumn[],
  groupVariable: string
) => {
  let prevalenceMax = 0;

  const convertedBodyGroups = Object.entries(bodyGroupsObj).map(
    (category: any) => {
      // compute total adverses of this category
      const categoryTotal = _(category[1].groups)
        .map()
        .sum();

      // add groups with zero values
      const groupsFilledObj: any = {
        ...headerGroupsObjZero,
        ...category[1].groups
      };

      const totalPercentage = computePercentage(
        categoryTotal,
        headerGroupsTotal
      );

      // compute prevalenceMax
      if (totalPercentage > prevalenceMax) {
        prevalenceMax = totalPercentage;
      }

      // convert groups to array and add datas
      let groupsFilled: any = [];
      if (groupVariable !== "NONE") {
        groupsFilled = Object.entries(groupsFilledObj).map(group => {
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
      }

      // add group total values
      groupsFilled.push({
        name: "Total",
        value: categoryTotal,
        total: headerGroupsTotal,
        percentage: totalPercentage
      });

      // compute groupPercentages object
      let groupPercentages = {};
      groupsFilled.forEach((group: any) => {
        groupPercentages = {
          ...groupPercentages,
          ...{ [group.name]: group.percentage }
        };
      });

      let bodyGroups = {
        name: category[0],
        groups: groupsFilled,
        subCategories: convertBodyGroupsSub(
          category[1].subCategories,
          headerGroupsObj,
          headerGroupsObjZero,
          headerGroupsTotal,
          sortColumns
        )
      };

      // merge groupPercentage object to bodyGroup to enable sorting for all groups
      bodyGroups = {
        ...bodyGroups,
        ...groupPercentages
      };

      return bodyGroups;
    }
  );

  return [convertedBodyGroups, prevalenceMax];
};
