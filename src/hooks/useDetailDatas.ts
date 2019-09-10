import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import * as c from "../store/constants";
import { AppState } from "../types";

export function useDetailDatas(category: string): any {
  // const dispatch = useDispatch();
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const datasDetail = _.filter(
    datasOriginal,
    data => data.AEBODSYS === category
  );
  const datasDetailsSize = _.size(datasDetail);

  return [datasDetail, datasDetailsSize];
}
