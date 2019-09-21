import React, { FC } from "react";
import { Handles, Handle, HandleInner } from "./sliderHandles.styles";

export interface Props {
  handles: {
    id: string;
    value: number;
    percent: number;
  }[];
  getHandleProps: (id: string) => void;
}

export const SliderHandles: FC<Props> = ({ handles, getHandleProps }) => {
  return (
    <Handles>
      {handles.map(({ id, percent, value }) => (
        <Handle key={id} percent={percent} {...getHandleProps(id)}>
          <HandleInner>{value}</HandleInner>
        </Handle>
      ))}
    </Handles>
  );
};
