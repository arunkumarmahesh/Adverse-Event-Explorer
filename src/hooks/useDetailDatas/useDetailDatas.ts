import { useSelector, useDispatch } from "react-redux";
import Fuse from "fuse.js";
import _ from "lodash";
import * as c from "../../store/constants";
import * as t from "../../types";
import { AppState } from "../../types";
import { useFilter } from "..";

const fuseOptions = {
  keys: ["AEBODSYS", "AEDECOD"],
  threshold: 0
};

export function useDetailDatas(category: string): [t.Data[], number] {
  const dispatch = useDispatch();
  const datas = useSelector((state: AppState) => state.datasOriginal);
  const fuse = new Fuse(datas, fuseOptions);
  const categoryDatas = fuse.search(category);
  const filteredDatas = useFilter(categoryDatas);
  const datasDetailsSize = _.size(filteredDatas);

  dispatch({
    type: c.SET_DETAIL_DATAS,
    key: "original",
    payload: {
      datas: filteredDatas,
      size: datasDetailsSize
    }
  });

  return [filteredDatas, datasDetailsSize];
}
