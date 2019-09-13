import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import { AppState } from "../types";
import { Filter } from "./components/filter/filter";
import {
  AEHeader,
  TableHeaderGroups,
  TableFooterGroups,
  TableBodyGroups
} from "../components";
import { useGroups, useGroupsSort, useFilter, useSummarize } from "../hooks";

export const AdverseGrouped: FC = () => {
  const colors = useSelector((state: AppState) => state.colors);
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const summarizedDatas = useSummarize(datasOriginal);
  const filteredDatas = useFilter(summarizedDatas);
  const [headerGroups, bodyGroups, footerGroups] = useGroups(filteredDatas);
  const bodyGroupsSorted = useGroupsSort(bodyGroups);
  // useMinMax(mainGroups);
  console.log("groupedDatasSorted", bodyGroupsSorted);
  return (
    <div>
      <AEHeader />
      <Filter />
      <Table>
        <TableHeaderGroups colors={colors} groups={headerGroups} />
        <TableBodyGroups colors={colors} groups={bodyGroupsSorted} />
        <TableFooterGroups colors={colors} groups={footerGroups} />
      </Table>
    </div>
  );
};
