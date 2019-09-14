import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import * as c from "../../store/constants";
import * as t from "../../types";
import { AppState } from "../../types";
import { useFilter } from "..";

export function useDetailDatas(category: string): [t.Data[], number] {
  const dispatch = useDispatch();
  const datas = useSelector((state: AppState) => state.datasOriginal);
  const categoryDatas = _.filter(
    datas,
    data => data.AEBODSYS === category || data.AEDECOD === category
  );
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
