import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import * as t from "../types";
import { Filter } from "./components/filter";
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
  const colors = useSelector((state: t.AppState) => state.colors);
  const headerValues = useSelector((state: t.AppState) => state.headerValues);
  const footerValues = useSelector((state: t.AppState) => state.footerValues);
  const datasOriginal = useSelector((state: t.AppState) => state.datasOriginal);
  const summarizedDatas = useSummarize(datasOriginal);
  const filteredDatas = useFilter(summarizedDatas);
  useHeaderFooterGroups(filteredDatas);
  const mainGroups = useMainGroups(filteredDatas);
  useMinMax(mainGroups);

  return (
    <div>
      <AEHeader />
      <Filter />
      <Table>
        <TableHeaderGroups colors={colors} values={headerValues} />
        <TableBodyGroups
          colors={colors}
          values={mainGroups}
          totalCount={headerValues.total}
        />
        <TableFooterGroups
          colors={colors}
          values={footerValues}
          totalCount={headerValues.total}
        />
      </Table>
    </div>
  );
};
