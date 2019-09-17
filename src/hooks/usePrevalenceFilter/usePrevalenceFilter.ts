export const usePrevalenceFilter = (datas: any, prevalence: number) => {
  const filteredDatas: any = datas.filter((data: any) => {
    let add = true;
    if (data["highestPrevalence"] < prevalence) {
      add = false;
    }
    return add && data;
  });

  return filteredDatas;
};
