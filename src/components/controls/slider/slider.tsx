import React, { FC } from "react";
import { Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import {
  SliderHandles,
  SliderTracks,
  SliderTicks,
  SliderRail
} from "./components";
import { Slider as SUI_SLider, SliderWrapper } from "./slider.styles";

export interface Props {
  range: [number, number];
  selected: [number, number];
  handleChange: any;
}

export const Slider: FC<Props> = ({ range, selected, handleChange }) => {
  return (
    <SliderWrapper>
      <SUI_SLider
        domain={range}
        step={1}
        mode={2}
        values={selected}
        onSlideEnd={handleChange}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <SliderHandles handles={handles} getHandleProps={getHandleProps} />
          )}
        </Handles>
        <Tracks right={false} left={false}>
          {({ tracks, getTrackProps }) => (
            <SliderTracks tracks={tracks} getTrackProps={getTrackProps} />
          )}
        </Tracks>
        <Ticks count={15}>
          {({ ticks }) => <SliderTicks ticks={ticks} count={ticks.length} />}
        </Ticks>
      </SUI_SLider>
    </SliderWrapper>
  );
};
