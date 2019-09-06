import { useSelector } from "react-redux";
import { AppState } from "../utils/types";
import { Data } from "../utils/types";
import _ from "lodash";

export function useSummarize(datas: Data[]): Data[] {
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);

  if (summarizedBy === "Events") {
    return _.filter(datas, data => data.AEBODSYS !== "");
  }

  if (summarizedBy === "Participants") {
    return _.uniqBy(datas, "USUBJID");
  }
  return datas;
}
