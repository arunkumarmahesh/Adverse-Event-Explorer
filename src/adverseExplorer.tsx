import React, { FC, FormEvent, SyntheticEvent, useState } from "react";
import { Table } from "semantic-ui-react";
import { TableHeader } from "./tableHeader";
import { TableRowExpandable } from "./tableRowExpandable";
import { Filter } from "./pages/components/filter";
import _ from "lodash";
import "semantic-ui-css/semantic.min.css";

export interface Props {
  datas: any;
}

export const AdverseExplorer: FC<Props> = ({ datas }) => {
  const [summarizedBy, setSummarizedBy] = useState<string>("Participants");
  const [groupVariable, setGroupVariable] = useState<string>("ARM");
  const [serious, setSerious] = useState<string[]>(["N", "Y"]);
  const [severity, setSeverity] = useState<string[]>([
    "MODERATE",
    "SEVERE",
    "MILD"
  ]);
  const [relationship, setRelationship] = useState<string[]>([
    "UNLIKELY RELATED",
    "PROBABLY RELATED",
    "NOT RELATED",
    "POSSIBLY RELATED",
    "DEFINITELY RELATED"
  ]);
  const [outcome, setOutcome] = useState<string[]>([
    "RECOVERED",
    "RESOLVED, RECOVERED",
    "RESOLVED WITHOUT SEQUELAE",
    "RESOLVED WITH SEQUELAE"
  ]);
  const handleSummarizedByChange = (
    e: FormEvent<HTMLInputElement>,
    { value }: any // Semantic UI CheckboxProps are any too
  ) => setSummarizedBy(value);
  const handleGroupVariableChange = (
    e: SyntheticEvent<HTMLElement>,
    { value }: any // Semantic UI DropdownProps are any too
  ) => setGroupVariable(value);
  const handleSeriousChange = (
    e: FormEvent<HTMLInputElement>,
    { value }: any // Semantic UI CheckboxProps are any too
  ) => setSerious(addOrRemoveItem(serious, value));
  const handleSeverityChange = (
    e: FormEvent<HTMLInputElement>,
    { value }: any // Semantic UI CheckboxProps are any too
  ) => setSeverity(addOrRemoveItem(severity, value));
  const handleRelationshipChange = (
    e: FormEvent<HTMLInputElement>,
    { value }: any // Semantic UI CheckboxProps are any too
  ) => setRelationship(addOrRemoveItem(relationship, value));
  const handleOutcomeChange = (
    e: FormEvent<HTMLInputElement>,
    { value }: any // Semantic UI CheckboxProps are any too
  ) => setOutcome(addOrRemoveItem(outcome, value));

  const addOrRemoveItem = (array: string[], value: string) => {
    if (array.includes(value)) {
      // remove
      return array.filter(item => item !== value);
    } else {
      // add
      return [...array, value];
    }
  };

  console.log("serious", serious);
  console.log("severity", severity);
  console.log("relationship", relationship);
  console.log("outcome", outcome);

  // Events
  const colors = ["green", "red", "blue", "orange"];
  const subGroupVariable = "AEDECOD";
  const groups: { [key: string]: number } = _.chain(datas) // has to be changeable between Events and Participants
    .filter(data => data.AEBODSYS !== "")
    /*    .filter(data => data.AEREL === "NOT RELATED") */
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

  // Serious = AESER
  // Severity = AESEV
  // Relationship = AEREL
  // Outcome = AEOUT

  const groupVariableOptions = [
    { key: "RACE", value: "RACE", text: "RACE" },
    { key: "SEX", value: "SEX", text: "SEX" },
    { key: "ARM", value: "ARM", text: "ARM" },
    { key: "NONE", value: "NONE", text: "NONE" }
  ];

  return (
    <div>
      <Filter
        groupVariable={groupVariable}
        summarizedBy={summarizedBy}
        serious={serious}
        severity={severity}
        relationship={relationship}
        outcome={outcome}
        handleGroupVariableChange={handleGroupVariableChange}
        handleSummarizedByChange={handleSummarizedByChange}
        handleSeriousChange={handleSeriousChange}
        handleSeverityChange={handleSeverityChange}
        handleRelationshipChange={handleRelationshipChange}
        handleOutcomeChange={handleOutcomeChange}
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
