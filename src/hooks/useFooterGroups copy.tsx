import { useSelector } from "react-redux";
import { AppState } from "../utils/types";
import { Data } from "../utils/types";
import _ from "lodash";

export function useFooterGroups(datas: Data[]) {
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);

  if (summarizedBy === "Events") {
    return _(datas)
      .filter(data => data.AEBODSYS !== "")
      .countBy("ARM")
      .value();
  }

  if (summarizedBy === "Participants") {
    const withoutScreenFailure = _(datas)
      .filter(data => data.AEBODSYS !== "")
      .uniqBy("USUBJID")
      .countBy("ARM")
      .value();

    return { ...withoutScreenFailure, ...{ "Screen Failure": 0 } };
  }
  return datas;
}
