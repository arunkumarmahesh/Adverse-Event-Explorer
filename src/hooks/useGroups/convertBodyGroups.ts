import {
  convertGroups,
  computeGroupPercentages
} from "./convertBodyGroupsHelper";
import { convertBodySubGroups } from "./convertBodySubGroups";
import { SortColumn, Group, GroupsObj } from "../../types";

export const convertBodyGroups = (
  bodyGroupsObj: any,
  headerGroupsObj: GroupsObj,
  sortColumns: SortColumn[],
  countedSubCategories: any
) => {
  let prevalenceMax: number | {} = 0;

  const bodyGroups: any = Object.entries(bodyGroupsObj).map((category: any) => {
    const groups: Group[] = convertGroups(category, headerGroupsObj);

    const [groupPercentages, prevalenceMaxGroup] = computeGroupPercentages(
      groups,
      prevalenceMax
    );

    prevalenceMax =
      prevalenceMax < prevalenceMaxGroup ? prevalenceMaxGroup : prevalenceMax;

    let bodyGroups = {
      name: category[0],
      groups: groups,
      subCategories: convertBodySubGroups(
        category[0],
        headerGroupsObj,
        sortColumns,
        countedSubCategories
      )
    };

    // merge groupPercentage object to bodyGroup to enable sorting for all groups
    bodyGroups = {
      ...bodyGroups,
      ...groupPercentages
    };

    return bodyGroups;
  });

  return [bodyGroups, prevalenceMax];
};
