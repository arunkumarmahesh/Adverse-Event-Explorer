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
  let highestPrevalence = 0;

  groups.forEach((group: Group) => {
    groupPercentages = {
      ...groupPercentages,
      ...{ [group.name]: group.percentage }
    };
    // compute highestPrevalence of this group
    highestPrevalence =
      highestPrevalence < group.percentage
        ? group.percentage
        : highestPrevalence;
    // merge highestPrevalence into groupPercentages
    groupPercentages = {
      ...groupPercentages,
      ...{ highestPrevalence: highestPrevalence }
    };
    // compute prevalenceMax as highest prevalence of all groups for prevalence range slider
    prevalenceMax =
      prevalenceMax < group.percentage ? group.percentage : prevalenceMax;
  });

  return [groupPercentages, prevalenceMax];
};
