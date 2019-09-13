import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { AppState, Data, Groups, GroupedValue } from "../../types";
import * as c from "../../store/constants";

export function useGroups(datas: Data[]): any {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const dispatch = useDispatch();
  const computePercentage = (part: number, total: number) => {
    return total > 0 ? ((part / total) * 100).toFixed(1) : 0;
  };

  let headerGroupsObj: Groups = {};
  let headerGroupsTotal = 0;
  let footerGroupsObj: Groups = {};
  let footerGroupsTotal = 0;
  let maxAge = 0;
  let minAge = 100;

  let bodyGroupsObj: any = {};

  datas.forEach((data: any) => {
    // compute headerGroups values
    if (groupVariable !== "NONE") {
      headerGroupsObj[data[groupVariable]] = headerGroupsObj[
        data[groupVariable]
      ]
        ? headerGroupsObj[data[groupVariable]] + 1
        : 1;
    }
    headerGroupsTotal = headerGroupsTotal + 1;

    // compute footerGroup values
    if (data.AEBODSYS !== "") {
      footerGroupsObj[data[groupVariable]] = footerGroupsObj[
        data[groupVariable]
      ]
        ? footerGroupsObj[data[groupVariable]] + 1
        : 1;

      footerGroupsTotal = footerGroupsTotal + 1;
    }

    // compute groups
    const category = data.AEBODSYS;
    const group = data[groupVariable];
    const subCategory = data.AEDECOD;

    if (bodyGroupsObj[category]) {
      if (bodyGroupsObj[category][group]) {
        bodyGroupsObj[category][group] = bodyGroupsObj[category][group] + 1;
      } else {
        bodyGroupsObj[category][group] = 1;
      }
    } else {
      bodyGroupsObj = {
        ...bodyGroupsObj,
        ...{ [category]: { [group]: 1 } }
      };
    }

    // detect min and max age
    if (data.AGE > maxAge) {
      maxAge = data.AGE;
    }
    if (data.AGE < minAge) {
      minAge = data.AGE;
    }
  });

  // Add ScreenFailure if not existing
  if (!headerGroupsObj["Screen Failure"]) {
    headerGroupsObj = { ...headerGroupsObj, ...{ "Screen Failure": 0 } };
  }

  if (!footerGroupsObj["Screen Failure"]) {
    footerGroupsObj = { ...footerGroupsObj, ...{ "Screen Failure": 0 } };
  }

  // Convert header group objects to arrays and add total values
  const headerGroups: GroupedValue[] = Object.entries(headerGroupsObj).map(
    values => ({
      name: values[0],
      value: values[1],
      total: headerGroupsTotal
    })
  );
  headerGroups.push({
    name: "Total",
    value: headerGroupsTotal,
    total: headerGroupsTotal
  });

  // Convert footer group objects to arrays and add total values
  const footerGroups: GroupedValue[] = Object.entries(footerGroupsObj).map(
    values => ({
      name: values[0],
      value: values[1],
      total: footerGroupsTotal
    })
  );
  footerGroups.push({
    name: "Total",
    value: footerGroupsTotal,
    total: headerGroupsTotal
  });

  const headerGroupsObjZero = _.mapValues(headerGroupsObj, () => 0);
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

  /*   dispatch({ type: c.SET_HEADER_VALUES, payload: headerValues });
  dispatch({ type: c.SET_FOOTER_VALUES, payload: footerValues }); */
  /*   dispatch({ type: c.SET_AGE_RANGE_ALL, payload: [minAge, maxAge] });
  dispatch({ type: c.SET_AGE_RANGE_SELECTED, payload: [minAge, maxAge] }); */

  return [headerGroups, bodyGroups, footerGroups];
}
