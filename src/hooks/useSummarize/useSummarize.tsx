import { useMemo } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../types";
import { Data } from "../../types";
import { filter } from "lodash";
import { uniqBy } from "lodash";

export function useSummarize(datas: Data[]): Data[] {
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);

  const summarizedDatas = (summarizedBy: string, datas: Data[]) => {
    if (summarizedBy === "Events") {
      return filter(datas, data => data.AEBODSYS !== "");
    }

    if (summarizedBy === "Participants") {
      return uniqBy(datas, "USUBJID");
    }

    return datas;
  };

  return useMemo(() => summarizedDatas(summarizedBy, datas), [
    summarizedBy,
    datas
  ]);
}
