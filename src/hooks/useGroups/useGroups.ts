import { useSelector } from "react-redux";
import _ from "lodash";
import {
  AppState,
  Data,
  Groups,
  GroupedValue,
  HeaderGroups
} from "../../types";
import { computeAgeRange } from "./computeAgeRange";
import { computeHeaderGroups } from "./computeHeaderGroups";
import { computeFooterGroups } from "./computeFooterGroups";
import { convertFooterGroups } from "./convertFooterGroups";
import { convertBodyGroups } from "./convertBodyGroups";
import { sortGroups } from "./sortGroups";

export function useGroups(datas: Data[]): any {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const sortColumns = useSelector((state: AppState) => state.sortColumns);

  let headerGroupsObj: Groups = {};
  let headerGroupsTotal = 0;
  let footerGroupsObj: Groups = {};
  let footerGroupsTotal = 0;
  let maxAge = 0;
  let minAge = 200;
  let summarizedByDatas = [{}];

  // used only for header and footer
  if (summarizedBy === "Events") {
    summarizedByDatas = _.filter(datas, data => data.AEBODSYS !== "");
  }

  // used only for header and footer
  if (summarizedBy === "Participants") {
    summarizedByDatas = _.uniqBy(datas, "USUBJID");
  }

  summarizedByDatas.forEach((data: any) => {
    [headerGroupsObj, headerGroupsTotal] = computeHeaderGroups(
      data,
      headerGroupsObj,
      groupVariable,
      headerGroupsTotal
    );

    [footerGroupsObj, footerGroupsTotal] = computeFooterGroups(
      data,
      footerGroupsObj,
      groupVariable,
      footerGroupsTotal
    );

    [minAge, maxAge] = computeAgeRange(data.AGE, minAge, maxAge);
  });

  // create a sorted headerGroups object with zero values
  const headerGroupsObjZero = _.mapValues(
    _(headerGroupsObj)
      .toPairs()
      .sortBy(0)
      .fromPairs()
      .value(),
    () => 0
  );

  // sort headerGroupsObj and add total values at the end
  headerGroupsObj = {
    ..._(headerGroupsObj)
      .toPairs()
      .sortBy(0)
      .fromPairs()
      .value(),
    ...{ Total: headerGroupsTotal }
  };

  // sort footerGroupsObj and add total values at the end
  footerGroupsObj = _(footerGroupsObj)
    .toPairs()
    .sortBy(0)
    .fromPairs()
    .value();

  let datasGrouped = {};
  // group categories for events
  if (summarizedBy === "Events") {
    datasGrouped = _.chain(datas)
      .filter(data => data.AEBODSYS !== "")
      .groupBy("AEBODSYS")
      .value();
  }
  // group categories for participants
  if (summarizedBy === "Participants") {
    datasGrouped = _.chain(datas)
      .filter(data => data.AEBODSYS !== "")
      .groupBy("AEBODSYS")
      .mapValues(values => _.uniqBy(values, "USUBJID"))
      .value();
  }

  // count category groups for events and participants
  const countedCategories = _.chain(datasGrouped)
    .mapValues(value => {
      const groupsCounted = _.countBy(value, groupVariable);
      const groupsTotal = _(groupsCounted)
        .map()
        .sum();
      if (groupVariable !== "NONE") {
        return {
          ...headerGroupsObjZero,
          ...groupsCounted,
          ...{ Total: groupsTotal }
        };
      }
      return {
        ...headerGroupsObjZero,
        ...{ Total: groupsTotal }
      };
    })
    .value();

  // countedSubCategories for events and participants
  const countedSubCategories = _.mapValues(datasGrouped, value =>
    _.chain(value)
      .groupBy("AEDECOD")
      .mapValues(value => {
        const groupsCounted = _.countBy(value, groupVariable);
        const groupsTotal = _(groupsCounted)
          .map()
          .sum();
        if (groupVariable !== "NONE") {
          return {
            ...headerGroupsObjZero,
            ...groupsCounted,
            ...{ Total: groupsTotal }
          };
        }
        return {
          ...headerGroupsObjZero,
          ...{ Total: groupsTotal }
        };
      })
      .value()
  );

  // compute header groups array
  const headerGroups: HeaderGroups = _.map(headerGroupsObj, (value, key) => ({
    name: key,
    value: value,
    total: headerGroupsObj["Total"] // TODO: check if really necessary
  }));

  // compute body groups array
  const [convertedBodyGroups, prevalenceMax] = convertBodyGroups(
    countedCategories,
    headerGroupsObj,
    sortColumns,
    countedSubCategories
  );

  // compute footer groups array
  const footerGroups: GroupedValue[] = convertFooterGroups(
    footerGroupsObj,
    footerGroupsTotal,
    headerGroupsObj
  );

  const bodyGroups = sortGroups(convertedBodyGroups, sortColumns);

  return [
    headerGroups,
    bodyGroups,
    footerGroups,
    [minAge, maxAge],
    [0, prevalenceMax]
  ];
}
