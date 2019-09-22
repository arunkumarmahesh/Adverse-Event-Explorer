import { useDispatch } from "react-redux";
import {
  setSummarizedBy,
  setGroupVariable,
  setAgeFilterSelected
} from "../../store/actions";
import { SummarizedBy, GroupVariable } from "../../types";

export const useStoreParameter = () => {
  const dispatch = useDispatch();
  // TODO: Does probably not work with IE11
  const url = new URL(window.location.href);
  const storeParam: string = url.searchParams.get("store") || "";
  if (storeParam[0]) {
    const decodedStoreParam: string = atob(storeParam);
    const storeArr: string[] = decodedStoreParam.split(",");
    const summarizedBy = storeArr[0] as SummarizedBy;
    const groupVariable = storeArr[1] as GroupVariable;
    const ageArr: string[] = storeArr[2].split("-");
    const ageFilterSelected: [number, number] = [
      Number(ageArr[0]),
      Number(ageArr[1])
    ];

    // https://gc.de/gc/base64/
    // /?store=RXZlbnRzLFNFWCwzMC00MA==

    dispatch(setSummarizedBy(summarizedBy));
    dispatch(setGroupVariable(groupVariable));
    dispatch(setAgeFilterSelected(ageFilterSelected));
  }
};
