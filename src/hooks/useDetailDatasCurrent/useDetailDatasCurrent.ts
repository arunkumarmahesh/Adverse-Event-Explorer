import { useSelector } from "react-redux";
import _ from "lodash";
import Fuse from "fuse.js";
import * as t from "../../types";
import { AppState } from "../../types";

export function useDetailDatasCurrent(datas: t.Data[]): [t.Data[], number] {
  const searchTerm = useSelector((state: AppState) => state.detailSearchTerm);

  const fuseOptions = {
    keys: ["AETERM", "AEDECOD", "AESEV", "AEREL", "AEOUT"],
    threshold: 0
  };

  let searchedDatas = null;

  if (searchTerm && searchTerm[1]) {
    const fuse = new Fuse(datas, fuseOptions);
    searchedDatas = fuse.search(searchTerm);
  }

  const unsortedDatas = searchedDatas || datas;

  const detailSort = useSelector((state: AppState) => state.detailSortColumns);

  let sortedDatas = null;

  if (!_.isEmpty(detailSort))
    sortedDatas = _.orderBy(
      unsortedDatas,
      _.map(detailSort, "name"),
      _.map(detailSort, "direction")
    );

  const currentDatas = sortedDatas || unsortedDatas;
  const currentDatasSize = _.size(currentDatas);

  return [currentDatas, currentDatasSize];
}
