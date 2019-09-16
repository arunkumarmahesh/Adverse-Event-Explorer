import { useSelector } from "react-redux";
import { mapValues } from "lodash";
import { AppState, Data, Groups, GroupedValue } from "../../types";
import { computeCategories } from "./computeCategories";
import { computeSubCategories } from "./computeSubCategories";
import { computeHeaderGroups } from "./computeHeaderGroups";
import { convertHeaderGroups } from "./convertHeaderGroups";
import { computeFooterGroups } from "./computeFooterGroups";
import { convertFooterGroups } from "./convertFooterGroups";
import { convertBodyGroups } from "./convertBodyGroups";
import { sortGroups } from "./sortGroups";

export function useGroups(datas: Data[]): any {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const sortColumns = useSelector((state: AppState) => state.sortColumns);

  let headerGroupsObj: Groups = {};
  let headerGroupsTotal = 0;
  let footerGroupsObj: Groups = {};
  let footerGroupsTotal = 0;
  let maxAge = 0;
  let minAge = 0;

  let bodyGroupsObj: any = {};

  datas.forEach((data: any) => {
    // compute table header values

    headerGroupsObj = computeHeaderGroups(data, headerGroupsObj, groupVariable);

    headerGroupsTotal = headerGroupsTotal + 1;
    // add ScreenFailure if not existing
    if (groupVariable === "ARM" && !headerGroupsObj["Screen Failure"]) {
      headerGroupsObj = { ...headerGroupsObj, ...{ "Screen Failure": 0 } };
    }

    // compute table footer values
    footerGroupsObj = computeFooterGroups(data, footerGroupsObj, groupVariable);
    if (data.AEBODSYS !== "") {
      footerGroupsTotal = footerGroupsTotal + 1;
    }
    // add ScreenFailure if not existing
    if (groupVariable === "ARM" && !footerGroupsObj["Screen Failure"]) {
      footerGroupsObj = { ...footerGroupsObj, ...{ "Screen Failure": 0 } };
    }

    // compute table body values
    const category = data.AEBODSYS;
    const group = data[groupVariable];
    const subCategory = data.AEDECOD;

    bodyGroupsObj = computeCategories(
      bodyGroupsObj,
      category,
      group,
      groupVariable
    );
    bodyGroupsObj = computeSubCategories(
      bodyGroupsObj,
      category,
      subCategory,
      group,
      groupVariable
    );

    // compute age range
    if (data.AGE > maxAge) {
      maxAge = data.AGE;
    }
    if (data.AGE < minAge) {
      minAge = data.AGE;
    }
  });

  // Convert header group object to arrays and add total values
  const headerGroups: GroupedValue[] = convertHeaderGroups(
    headerGroupsObj,
    headerGroupsTotal
  );

  // Convert footer group object to arrays and add total values
  const footerGroups: GroupedValue[] = convertFooterGroups(
    footerGroupsObj,
    footerGroupsTotal,
    headerGroupsTotal,
    headerGroupsObj
  );

  const headerGroupsObjZero = mapValues(headerGroupsObj, () => 0);

  const [convertedBodyGroups, prevalenceMax] = convertBodyGroups(
    bodyGroupsObj,
    headerGroupsObj,
    headerGroupsObjZero,
    headerGroupsTotal,
    sortColumns,
    groupVariable
  );

  const bodyGroups = sortGroups(convertedBodyGroups, sortColumns);
  console.log("headerGroups", headerGroups);
  console.log("bodyGroups", bodyGroups);
  console.log("footerGroups", footerGroups);
  return [
    headerGroups,
    bodyGroups,
    footerGroups,
    [minAge, maxAge],
    [0, prevalenceMax]
  ];
}
