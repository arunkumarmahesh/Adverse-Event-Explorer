import React, { FC } from "react";
import { Ticks, Tick, TickValue } from "./sliderTicks.styles";

export interface Props {
  ticks: {
    id: string;
    value: number;
    percent: number;
  }[];
  count: number;
}

export const SliderTicks: FC<Props> = ({ ticks, count }) => {
  console.log("count", count);
  return (
    <Ticks>
      {ticks.map(({ percent, id, value }) => (
        <div key={id}>
          <Tick percent={percent}>
            <TickValue percent={percent} count={count}>
              {value}
            </TickValue>
          </Tick>
        </div>
      ))}
    </Ticks>
  );
};
