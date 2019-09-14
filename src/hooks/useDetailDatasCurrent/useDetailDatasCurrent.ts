import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Fuse from "fuse.js";
import * as c from "../../store/constants";
import * as t from "../../types";
import { AppState } from "../../types";

export function useDetailDatasCurrent(datas: t.Data[]): [t.Data[], number] {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: AppState) => state.detailSearch);

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

  const detailSort = useSelector((state: AppState) => state.detailSort);

  let sortedDatas = null;

  if (!_.isEmpty(detailSort))
    sortedDatas = _.orderBy(
      unsortedDatas,
      _.map(detailSort, "name"),
      _.map(detailSort, "direction")
    );

  const currentDatas = sortedDatas || unsortedDatas;
  const currentDatasSize = _.size(currentDatas);

  dispatch({
    type: c.SET_DETAIL_DATAS,
    key: "current",
    payload: {
      datas: currentDatas,
      size: currentDatasSize
    }
  });

  return [currentDatas, currentDatasSize];
}
