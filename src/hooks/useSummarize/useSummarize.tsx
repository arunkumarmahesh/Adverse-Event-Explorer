import { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../types";
import { Data } from "../../types";
import _ from "lodash";

export function useSummarize(datas: Data[]): Data[] {
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);

  const summarizedDatas = (summarizedBy: string, datas: Data[]) => {
    if (summarizedBy === "Events") {
      return _.filter(datas, data => data.AEBODSYS !== "");
    }

    if (summarizedBy === "Participants") {
      return _.uniqBy(datas, "USUBJID");
    }

    return datas;
  };

  return useMemo(() => summarizedDatas(summarizedBy, datas), [
    summarizedBy,
    datas
  ]);
}
