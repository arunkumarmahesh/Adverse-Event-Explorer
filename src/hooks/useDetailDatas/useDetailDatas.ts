import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import * as c from "../../store/constants";
import * as t from "../../types";
import { AppState } from "../../types";

export function useDetailDatas(category: string): [t.Data[], number] {
  const dispatch = useDispatch();
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const datasDetail = _.filter(
    datasOriginal,
    data => data.AEBODSYS === category
  );
  const datasDetailsSize = _.size(datasDetail);

  dispatch({
    type: c.SET_DETAIL_DATAS,
    key: "original",
    payload: {
      datas: datasDetail,
      size: datasDetailsSize
    }
  });

  return [datasDetail, datasDetailsSize];
}
