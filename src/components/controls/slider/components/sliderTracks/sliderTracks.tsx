import React, { FC } from "react";
import { Tracks, Track } from "./sliderTracks.styles";

export interface Props {
  tracks: {
    id: string;
    source: {
      id: string;
      value: number;
      percent: number;
    };
    target: {
      id: string;
      value: number;
      percent: number;
    };
  }[];
  getTrackProps: () => void;
}

export const SliderTracks: FC<Props> = ({ tracks, getTrackProps }) => {
  return (
    <Tracks>
      {tracks.map(({ id, source, target }) => (
        <Track
          key={id}
          targetPercent={target.percent}
          sourcePercent={source.percent}
          {...getTrackProps()}
        ></Track>
      ))}
    </Tracks>
  );
};
