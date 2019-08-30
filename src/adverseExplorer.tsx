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
  const subGroupVariable = "AEDECOD";
  const groups: any = _.chain(datas) // has to be changeable between Events and Participants
    .filter(data => data.AEBODSYS !== "")
    .countBy(groupVariable)
    .value();
  const groupsTotal = _.sum(Object.values(groups).map((key: any) => key));

  const aebodsys = _.chain(datas) // has to changeable, filterable and searchable
    .filter(data => data.AEBODSYS !== "")
    .groupBy("AEBODSYS")
    .value();

  return (
    <Table celled padded>
      <TableHeader groups={groups} groupsTotal={groupsTotal} />
      <Table.Body>
        {Object.entries(aebodsys).map((data, key) => (
          <TableRowExpandable
            key={key}
            index={key}
            data={data}
            groups={groups}
            groupsTotal={groupsTotal}
            groupVariable={groupVariable}
            subGroupVariable={subGroupVariable}
          />
        ))}
      </Table.Body>
    </Table>
  );
};
