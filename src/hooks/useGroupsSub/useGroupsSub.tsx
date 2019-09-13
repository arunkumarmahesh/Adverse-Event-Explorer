import { useSelector } from "react-redux";
import { AppState } from "../../types";
import _ from "lodash";

export function useGroupsSub(groupData: any) {
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);

  datasOriginal.forEach((data: any) => {
    if (data.AEBODSYS === groupData.name) {
      console.log("Hello", groupData.name);
    }
  });
  return [];
}
