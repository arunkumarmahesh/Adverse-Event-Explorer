import { useDispatch } from "react-redux";
import {
  setSummarizedBy,
  setGroupVariable,
  setAgeFilterSelected
} from "../../store/actions";

export const useStoreParameter = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  const storeParam: any = url.searchParams.get("store");
  const decodedStoreParam: string = atob(storeParam);
  const storeArr: any = decodedStoreParam.split(",");
  // https://gc.de/gc/base64/
  // /?store=RXZlbnRzLFNFWCwzMC00MA==

  dispatch(setSummarizedBy(storeArr[0]));
  dispatch(setGroupVariable(storeArr[1]));
  dispatch(setAgeFilterSelected(storeArr[2].split("-")));
};
