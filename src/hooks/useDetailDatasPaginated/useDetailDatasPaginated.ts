import { useSelector } from "react-redux";
import * as t from "../../types";

export function useDetailDatasPaginated(
  datas: t.Data[],
  page: number
): t.Data[] {
  const resultsPerPage = useSelector(
    (state: t.AppState) => state.detailResultsPerPage
  );

  const offset = (page - 1) * resultsPerPage;

  return datas.slice(offset).slice(0, resultsPerPage);
}
