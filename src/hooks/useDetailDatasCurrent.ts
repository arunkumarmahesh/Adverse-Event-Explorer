import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import Fuse from "fuse.js";
import * as c from "../store/constants";
import * as o from "../utils/options";
import { AppState } from "../types";

export function useDetailDatasCurrent() {
  const dispatch = useDispatch();
  const detailDatas = useSelector(
    (state: AppState) => state.detailDatas["original"].datas
  );
  const searchTerm = useSelector((state: AppState) => state.detailSearch);

  let searchedDatas = null;

  if (searchTerm) {
    const fuse = new Fuse(detailDatas, o.fuseOptions);
    searchedDatas = fuse.search(searchTerm);
  }

  const unsortedDatas = searchedDatas || detailDatas;

  const detailSort = useSelector((state: AppState) => state.detailSort);

  let sortedDatas = null;

  if (!_.isEmpty(detailSort))
    sortedDatas = _.orderBy(
      unsortedDatas,
      _.keys(detailSort),
      _.values(detailSort)
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
}
