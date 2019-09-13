export const computeSubCategories = (
  data: any,
  bodyGroupsObj: any,
  category: any,
  subCategory: any,
  group: any
) => {
  if (bodyGroupsObj[category].subCategories) {
    if (bodyGroupsObj[category].subCategories[subCategory]) {
      if (bodyGroupsObj[category].subCategories[subCategory][group]) {
        bodyGroupsObj[category].subCategories[subCategory][group] =
          bodyGroupsObj[category].subCategories[subCategory][group] + 1;
      } else {
        bodyGroupsObj[category].subCategories[subCategory][group] = 1;
      }
    } else {
      bodyGroupsObj[category].subCategories[subCategory] = {
        ...bodyGroupsObj[category].subCategories[subCategory],
        ...{ [group]: 1 }
      };
    }
  } else {
    bodyGroupsObj[category] = {
      ...bodyGroupsObj[category],
      ...{
        subCategories: {
          ...bodyGroupsObj[category].subCategories,
          ...{ [subCategory]: { [group]: 1 } }
        }
      }
    };
  }

  return bodyGroupsObj;
};
