import styled from "styled-components";

export interface SliderTracksProps {}

export const Tracks = styled.div<SliderTracksProps>``;

export interface SliderTrackProps {
  targetPercent: number;
  sourcePercent: number;
}

export const Track = styled.div<SliderTrackProps>`
  position: absolute;
  height: 10px;
  z-index: 1;
  margin-top: 25px;
  background-color: #546c91;
  border-radius: 5px;
  cursor: pointer;
  left: ${props => props.sourcePercent}%;
  width: ${props => props.targetPercent - props.sourcePercent}%;
`;
