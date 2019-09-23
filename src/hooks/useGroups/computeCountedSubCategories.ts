import _ from "lodash";
import { Groups } from "../../types";

// countedSubCategories for events and participants
export const computeCountedSubCategories = (
  datasGrouped: any,
  groupVariable: string,
  headerGroupsObjZero: Groups
) => {
  let countedSubCategories: any;

  if (groupVariable !== "NONE") {
    countedSubCategories = _.mapValues(datasGrouped, value =>
      _.chain(value)
        .groupBy("AEDECOD")
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
        .value()
    );
  } else {
    countedSubCategories = _.mapValues(datasGrouped, value =>
      _.chain(value)
        .groupBy("AEDECOD")
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
        .value()
    );
  }

  return countedSubCategories;
};
