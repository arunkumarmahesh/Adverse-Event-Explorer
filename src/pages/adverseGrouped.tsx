import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import { AppState } from "../types";
import { Filter } from "./components/filter";
import { useHeaderFooterGroups } from "../hooks/useHeaderFooterGroups";
import { useMainGroups } from "../hooks/useMainGroups";
import { useFilter } from "../hooks/useFilter";
import { useSummarize } from "../hooks/useSummarize";
import { TableHeader } from "../components/tableHeader";
import { TableRowExpandable } from "../components/tableRowExpandable";
import { TableFooter } from "../components/tableFooter";

export const AdverseGrouped: FC = () => {
  const datasOriginal = useSelector((state: AppState) => state.datasOriginal);
  const summarizedDatas = useSummarize(datasOriginal);
  const filteredDatas = useFilter(summarizedDatas);
  useHeaderFooterGroups(filteredDatas);
  const mainGroups = useMainGroups(filteredDatas);

  return (
    <div>
      <h1>Adverse Explorer</h1>
      <hr />
      <Filter />
      <Table>
        <TableHeader />
        <Table.Body>
          {Object.entries(mainGroups).map((data, key) => {
            if (data[0]) {
              return <TableRowExpandable key={key} index={key} data={data} />;
            }
          })}
        </Table.Body>
        <TableFooter />
      </Table>
    </div>
  );
};
