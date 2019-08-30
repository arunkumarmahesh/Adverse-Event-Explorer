import React, { FC, useState, MouseEvent } from "react";
import { Table, Accordion, Icon } from "semantic-ui-react";
import _ from "lodash";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import datas from "./data.json";

const App: FC = () => {

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
>

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
