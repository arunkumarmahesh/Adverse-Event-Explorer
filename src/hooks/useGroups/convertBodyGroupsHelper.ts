import _ from "lodash";
import { computePercentage } from "./computePercentage";
import { GroupsObj, Category, Group } from "../../types";

export const convertGroups = (category: Category, headerGroupsObj: GroupsObj) =>
  _.map(category[1], (value, key) => ({
    name: key,
    value: value,
    total: headerGroupsObj[key],
    percentage: computePercentage(value, headerGroupsObj[key])
  }));

export const computeGroupPercentages = (
  groups: Group[],
  prevalenceMax: number | {}
) => {
  // compute groupPercentages object
  let groupPercentages = {};
  let All = 0;

  groups.forEach((group: Group) => {
    groupPercentages = {
      ...groupPercentages,
      ...{ [group.name]: group.percentage }
    };
    // compute All of this group
    All = All < group.percentage ? group.percentage : All;
    // merge All into groupPercentages
    groupPercentages = {
      ...groupPercentages,
      ...{ All: All }
    };
    // compute prevalenceMax as highest prevalence of all groups for prevalence range slider
    prevalenceMax =
      prevalenceMax < group.percentage ? group.percentage : prevalenceMax;
  });

  return [groupPercentages, prevalenceMax];
};
