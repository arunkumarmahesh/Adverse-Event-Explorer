import _ from "lodash";
import { Groups } from "../../types";

// countedCategories for events and participants
export const computeCountedCategories = (
  datasGrouped: any,
  groupVariable: string,
  headerGroupsObjZero: Groups
) => {
  let countedCategories: any;

  if (groupVariable !== "NONE") {
    countedCategories = _.chain(datasGrouped)
      .mapValues(value => {
        const groupsCounted = _.countBy(value, groupVariable);
        const groupsTotal = _(groupsCounted)
          .map()
          .sum();
        return {
          ...headerGroupsObjZero,
          ...groupsCounted,
          ...{ Total: groupsTotal }
        };
      })
      .value();
  } else {
    countedCategories = _.chain(datasGrouped)
      .mapValues(value => {
        const groupsCounted = _.countBy(value, groupVariable);
        const groupsTotal = _(groupsCounted)
          .map()
          .sum();
        return {
          ...headerGroupsObjZero,
          ...{ Total: groupsTotal }
        };
      })
      .value();
  }
  return countedCategories;
};
