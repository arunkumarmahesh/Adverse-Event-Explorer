import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";
import { AppState } from "../types";
import { Filter } from "./components/filter/filter";
import { TableBodyGroups } from "./components/tableBodyGroups/tableBodyGroups";
import {
  AEHeader,
  TableHeaderGroups,
  TableFooterGroups,
  SortButtons
} from "../components";
import {
  useGroups,
  useFilter,
  useSearch,
  useSort,
  usePrevalenceFilter,
  useStoreParameter
} from "../hooks";

import { SET_SORT_COLUMNS } from "../store/constants";

export const AdverseGrouped: FC = () => {
  useStoreParameter();
  const colors = useSelector((state: AppState) => state.colors);
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const sortColumns = useSelector((state: AppState) => state.sortColumns);
  const handleSort = useSort(sortColumns, SET_SORT_COLUMNS);
  const filteredDatas = useFilter(datasOriginal);
  const [
    headerGroups,
    bodyGroups,
    footerGroups,
    ageRange,
    prevalenceRange
  ] = useGroups(filteredDatas);
  const [searchedBodyGroups, resultsCount] = useSearch(bodyGroups);
  const currentBodyGroups = usePrevalenceFilter(searchedBodyGroups);

  return (
    <div>
      <AEHeader />
      <Filter
        ageRange={ageRange}
        prevalenceRange={prevalenceRange}
        resultsCount={resultsCount}
        headerGroups={headerGroups}
        currentBodyGroups={currentBodyGroups}
      />
      <SortButtons sortColumns={sortColumns} handleSort={handleSort} />
      <Table>
        <TableHeaderGroups
          colors={colors}
          groups={headerGroups}
          sortColumns={sortColumns}
          handleSort={handleSort}
        />
        <TableBodyGroups colors={colors} groups={currentBodyGroups} />
        <TableFooterGroups colors={colors} groups={footerGroups} />
      </Table>
    </div>
  );
};
