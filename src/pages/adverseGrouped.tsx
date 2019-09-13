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
import {
  useHeaderFooterGroups,
  useMainGroups,
  useFilter,
  useSummarize,
  useMinMax
} from "../hooks";

export const AdverseGrouped: FC = () => {
  const colors = useSelector((state: AppState) => state.colors);
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const summarizedDatas = useSummarize(datasOriginal);
  const filteredDatas = useFilter(summarizedDatas);
  const [groupedTotal, footerValues] = useHeaderFooterGroups(filteredDatas);
  const groupedDatas = useMainGroups(filteredDatas);
  // useMinMax(mainGroups);
  console.log("adverseGrouped groupedTotal", groupedTotal);
  console.log("adverseGrouped groupedDatas", groupedDatas);
  return (
    <div>
      <AEHeader />
      <Filter />
      <Table>
        <TableHeaderGroups colors={colors} values={groupedTotal} />
        <TableBodyGroups
          colors={colors}
          groupedDatas={groupedDatas}
          groupedTotal={groupedTotal}
        />
        <TableFooterGroups
          colors={colors}
          values={footerValues}
          totalCount={groupedTotal.total}
        />
      </Table>
    </div>
  );
};
