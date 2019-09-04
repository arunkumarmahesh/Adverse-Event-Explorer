import React, { FC, useState } from "react";
import { Table } from "semantic-ui-react";
import { TableHeader } from "./tableHeader";
import { TableRowExpandable } from "./tableRowExpandable";
import _ from "lodash";
import { Select } from "semantic-ui-react";
import { Radio } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

export interface Props {
  datas: any;
}

export const AdverseExplorer: FC<Props> = ({ datas }) => {
  const [groupVariable, setGroupVariable] = useState<string>("ARM");
  const [summarizedBy, setSummarizedBy] = useState<string>("Participants");

  // Events

  const colors = ["green", "red", "blue", "orange"];
  const subGroupVariable = "AEDECOD";
  const groups: { [key: string]: number } = _.chain(datas) // has to be changeable between Events and Participants
    .filter(data => data.AEBODSYS !== "")
    .countBy(groupVariable)
    .value();
  // console.log("groups", groups);

  const groupsTotal = _.sum(Object.values(groups).map((key: number) => key));
  // console.log("groupsTotal", groupsTotal);

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

  // get heighest value
  let groupsHeighestValue = 0;
  _.each(aebodsySorted, (item: any) => {
    const countedValues = _.countBy(item, groupVariable);
    const heighest = _.maxBy(Object.values(countedValues)) || 0;
    if (heighest > groupsHeighestValue) {
      groupsHeighestValue = heighest;
    }
  });
  // console.log("#", groupsHeighestValue);

  const groupOptions = [
    { key: "RACE", value: "RACE", text: "RACE" },
    { key: "SEX", value: "SEX", text: "SEX" },
    { key: "ARM", value: "ARM", text: "ARM" },
    { key: "NONE", value: "NONE", text: "NONE" }
  ];

  const handleGroupVariableChange = (e: any, { value }: any) =>
    setGroupVariable(value);
  const handleSummarizedByChange = (e: any, { value }: any) =>
    setSummarizedBy(value);
  console.log("asasdsa", summarizedBy);

  // Serious = AESER
  // Severity = AESEV
  // Relationship = AEREL
  // Outcome = AEOUT
  return (
    <div>
      <div>
        <Radio
          label="Participants"
          onChange={handleSummarizedByChange}
          value="Participants"
          checked={summarizedBy === "Participants" ? true : false}
        />
        <Radio
          label="Events"
          onChange={handleSummarizedByChange}
          value="Events"
          checked={summarizedBy === "Events" ? true : false}
        />
      </div>
      <Select
        placeholder="Select Group Variable"
        options={groupOptions}
        onChange={handleGroupVariableChange}
        value={groupVariable}
      />
      <Table>
        <TableHeader
          groups={groups}
          groupsTotal={groupsTotal}
          colors={colors}
        />
        <Table.Body>
          {Object.entries(aebodsySorted).map((data, key) => (
            <TableRowExpandable
              key={key}
              index={key}
              data={data}
              groups={groups}
              groupsTotal={groupsTotal}
              groupsHeighestValue={groupsHeighestValue}
              groupVariable={groupVariable}
              subGroupVariable={subGroupVariable}
              colors={colors}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
