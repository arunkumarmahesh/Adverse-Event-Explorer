import React, { FC, useState, MouseEvent } from "react";
import { Table, Accordion, Icon } from "semantic-ui-react";
import _ from "lodash";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import datas from "./data.json";

const App: FC = () => {
  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (e: MouseEvent, titleProps: any) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const armEvents: any = _.chain(datas)
    .filter(data => data.AEBODSYS !== "")
    .countBy("ARM")
    .value();
  const armEventsTotal = _.sum(Object.values(armEvents).map((key: any) => key));
  const armEventsSize = _.size(armEvents) + 1;


  const aebodsysEvents = _.chain(datas)
    .filter(data => data.AEBODSYS !== "")
    .groupBy("AEBODSYS")
    .value();

  console.log("aebodsysEvents", aebodsysEvents);
 
  const computePercentage = (part: number, total: number) => {
    return `${((part / total) * 100).toFixed(1)}%`;
  };

  console.log("activityIndex",)
  return (
    <div className="App">
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Category</Table.HeaderCell>
            <Table.HeaderCell colSpan={armEventsSize}>Groups</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">AE Rate by group</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            {Object.entries(armEvents).map(data => (
              <Table.HeaderCell key={data[0]}>
                {data[0]} <br />
                n={data[1]}
              </Table.HeaderCell>
            ))}
            <Table.HeaderCell>
              Total <br />
              n={armEventsTotal}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Object.entries(aebodsysEvents).map((data, key) => {
            console.log("#", data);
            return (
              <>
                <Table.Row key={data[0]}>
                  <Table.Cell>
                    <Accordion>
                      <Accordion.Title
                        active={activeIndex === key}
                        index={key}
                        onClick={handleClick}
                      >
                        <Icon name="dropdown" />
                        {data[0]}
                      </Accordion.Title>
                    </Accordion>
                  </Table.Cell>
                  {Object.entries(_.countBy(data[1], "ARM")).map(
                    (data, key) => (
                      <Table.Cell key={key}>
                        {computePercentage(data[1], armEvents[data[0]])}
                      </Table.Cell>
                    )
                  )}
                  <Table.Cell>
                    {computePercentage(_.size(data[1]), armEventsTotal)}
                  </Table.Cell>
                </Table.Row>

                {
                  if()
                  Object.entries(_.groupBy(data[1], "AEDECOD")).map(data => {
                  return (
                    <Table.Row key={data[0]} style={{ background: "#efefef" }}>
                      <Table.Cell style={{ paddingLeft: "35px" }}>
                        {data[0]}
                      </Table.Cell>
                      {Object.entries(_.countBy(data[1], "ARM")).map(
                        (data, key) => (
                          <Table.Cell key={key}>
                            {computePercentage(data[1], armEvents[data[0]])}
                          </Table.Cell>
                        )
                      )}
                      <Table.Cell>
                        {computePercentage(_.size(data[1]), armEventsTotal)}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default App;
