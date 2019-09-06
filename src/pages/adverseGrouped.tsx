import React, { FC } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import { AppState } from "../utils/types";
import { Filter } from "./components/filter";
import { useHeaderFooterGroups } from "../hooks/useHeaderFooterGroups";
import { useBodyGroups } from "../hooks/useBodyGroups";
import { useFilter } from "../hooks/useFilter";
import { useSummarize } from "../hooks/useSummarize";
import { TableHeader } from "../components/tableHeader";
import { TableRowExpandable } from "../components/tableRowExpandable";
import { TableFooter } from "../components/tableFooter";

export const AdverseGrouped: FC = () => {
  const datas = useSelector((state: AppState) => state.datas);
  const summarizedDatas = useSummarize(datas);
  const filteredDatas = useFilter(summarizedDatas);
  const [
    headerGroups,
    headerGroupsTotal,
    footerGroups,
    footerGroupsTotal
  ] = useHeaderFooterGroups(filteredDatas);
  const bodyGroups = useBodyGroups(filteredDatas, headerGroups);

  return (
    <div>
      <h1>Adverse Explorer</h1>
      <hr />
      <Filter />
      <Table>
        <TableHeader groups={headerGroups} total={headerGroupsTotal} />
        <Table.Body>
          {Object.entries(bodyGroups).map((data, key) => {
            if (data[0]) {
              return (
                <TableRowExpandable
                  key={key}
                  index={key}
                  data={data}
                  headerGroups={headerGroups}
                  headerGroupsTotal={headerGroupsTotal}
                />
              );
            }
          })}
        </Table.Body>
        <TableFooter
          footerGroups={footerGroups}
          footerGroupsTotal={footerGroupsTotal}
          headerGroups={headerGroups}
          headerGroupsTotal={headerGroupsTotal}
        />
      </Table>
    </div>
  );
};
