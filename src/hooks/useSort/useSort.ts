import { useDispatch } from "react-redux";
import produce from "immer";
import _ from "lodash";
import { SortColumn } from "../../types";

export const useSort = (sortColumns: SortColumn[], action: string) => {
  const dispatch = useDispatch();

  const handleSort = (
    method: string,
    clickedColumn: string,
    sortItems?: SortColumn[]
  ) => {
    const newSort = produce(sortColumns, draft => {
      const index = _.findIndex(sortColumns, { name: clickedColumn });

      switch (method) {
        case "reorder":
          return sortItems ? sortItems : [];
        case "update":
          index !== -1
            ? (draft[index].direction =
                draft[index].direction === "desc" ? "asc" : "desc")
            : draft.push({ name: clickedColumn, direction: "desc" });
          return draft;
        case "deleteSingle":
          _.remove(draft, {
            name: clickedColumn
          });
          return draft;
        case "deleteAll":
          return [];
      }
    });

    dispatch({
      type: action,
      payload: newSort
    });
  };

  return handleSort;
};
