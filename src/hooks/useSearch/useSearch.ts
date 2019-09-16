import { useState, useMemo } from "react";
import { Data, AppState } from "../../types";
import { useSelector } from "react-redux";

export const useSearch = (datas: Data[]) => {
  const searchTerm = useSelector((state: AppState) => state.searchTerm);

  const searchDatas = (searchTerm: string, datas: any) => {
    let searchResults = undefined;
    if (searchTerm[1]) {
      searchResults = datas.filter((data: any) => {
        let add = false;

        if (data.name.toLowerCase().includes(searchTerm)) {
          data.name = data.name.replace(
            new RegExp(searchTerm, "gi"),
            (match: any) => `<mark>${match}</mark>`
          );
          add = true;
        }

        data.subCategories = data.subCategories.filter((subData: any) => {
          if (subData.name.toLowerCase().includes(searchTerm)) {
            subData.name = subData.name.replace(
              new RegExp(searchTerm, "gi"),
              (match: any) => `<mark>${match}</mark>`
            );
            add = true;
            return subData;
          }
        });

        return add && data;
      });
    }

    return searchResults || datas;
  };

  return useMemo(() => searchDatas(searchTerm, datas), [searchTerm, datas]);
};
