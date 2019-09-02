import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import { TableHeader } from "./tableHeader";
import { TableRowExpandable } from "./tableRowExpandable";
import _ from "lodash";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  datas: any;
}

export const AdverseExplorer: FC<Props> = ({ datas }) => {
  // Events
  const groupVariable = "ARM"; // has to be changeable between ARM, SEX, RACE and NONE
  const colors = ["green", "red", "blue", "orange"];
  const subGroupVariable = "AEDECOD";
  const groups: { [key: string]: number } = _.chain(datas) // has to be changeable between Events and Participants
    .filter(data => data.AEBODSYS !== "")
    .countBy(groupVariable)
    .value();
  console.log("groups", groups);

  const groupsTotal = _.sum(Object.values(groups).map((key: number) => key));
  console.log("groupsTotal", groupsTotal);

  const aebodsysUnsorted = _.chain(datas) // has to be changeable, filterable and searchable
    .filter(data => data.AEBODSYS !== "")
    .groupBy("AEBODSYS")
    .value();
  // console.log("aebodsysUnsorted", aebodsysUnsorted);

  const aebodsySorted: { [key: string]: {} } = {};
  _(aebodsysUnsorted)
    .keys()
    .sort()
    .each(function(key) {
      aebodsySorted[key] = aebodsysUnsorted[key];
    });

  return (
    <Table celled padded>
      <TableHeader groups={groups} groupsTotal={groupsTotal} colors={colors} />
      <Table.Body>
        {Object.entries(aebodsySorted).map((data, key) => (
          <TableRowExpandable
            key={key}
            index={key}
            data={data}
            groups={groups}
            groupsTotal={groupsTotal}
            groupVariable={groupVariable}
            subGroupVariable={subGroupVariable}
            colors={colors}
          />
        ))}
      </Table.Body>
    </Table>
  );
};
