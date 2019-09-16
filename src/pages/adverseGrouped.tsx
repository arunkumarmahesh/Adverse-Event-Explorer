import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import produce from "immer";
import { Table } from "semantic-ui-react";
import { AppState, SortColumn } from "../types";
import { Filter } from "./components/filter/filter";
import {
  AEHeader,
  TableHeaderGroups,
  TableFooterGroups,
  SortButtons
} from "../components";
import { useGroups, useFilter, useSummarize, useSearch } from "../hooks";
import { TableBodyGroups } from "./components/tableBodyGroups/tableBodyGroups";
import { SET_SORT_COLUMNS } from "../store/constants";

export const AdverseGrouped: FC = () => {
  const dispatch = useDispatch();
  const colors = useSelector((state: AppState) => state.colors);
  const sortColumns = useSelector((state: AppState) => state.sortColumns);
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const summarizedDatas = useSummarize(datasOriginal);
  const filteredDatas = useFilter(summarizedDatas);
  const [
    headerGroups,
    bodyGroups,
    footerGroups,
    ageRange,
    prevalenceRange
  ] = useGroups(filteredDatas);
  const searchedBodyGroups = useSearch(bodyGroups);

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
      type: SET_SORT_COLUMNS,
      payload: newSort
    });
  };

  return (
    <div>
      <AEHeader />
      <Filter ageRange={ageRange} prevalenceRange={prevalenceRange} />
      <SortButtons sortColumns={sortColumns} handleSort={handleSort} />
      <Table>
        <TableHeaderGroups
          colors={colors}
          groups={headerGroups}
          sortColumns={sortColumns}
          handleSort={handleSort}
        />
        <TableBodyGroups colors={colors} groups={searchedBodyGroups} />
        <TableFooterGroups colors={colors} groups={footerGroups} />
      </Table>
    </div>
  );
};
