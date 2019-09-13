export const computeCategories = (
  data: any,
  bodyGroupsObj: any,
  category: any,
  group: any
) => {
  if (bodyGroupsObj[category]) {
    if (bodyGroupsObj[category].groups[group]) {
      bodyGroupsObj[category].groups[group] =
        bodyGroupsObj[category].groups[group] + 1;
    } else {
      bodyGroupsObj[category].groups[group] = 1;
    }
  } else {
    bodyGroupsObj = {
      ...bodyGroupsObj,
      ...{ [category]: { groups: { [group]: 1 } } }
    };
  }
  return bodyGroupsObj;
};
