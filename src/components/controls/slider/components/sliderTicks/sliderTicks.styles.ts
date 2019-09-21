import styled from "styled-components";

export interface TicksProps {}

export const Ticks = styled.div<TicksProps>``;

export interface TickProps {
  percent: number;
}

export const Tick = styled.div<TickProps>`
  position: absolute;
  margin-top: 42px;
  margin-left: -0.5px;
  width: 1px;
  height: 8px;
  background-color: silver;
  left: ${props => props.percent}%;
`;

export interface TickValueProps {
  percent: number;
  count: number;
}
export const TickValue = styled.div<TickValueProps>`
  position: absolute;
  margin-top: 6px;
  font-size: 10px;
  text-align: center;
  margin-left: ${props => -(10000 / props.count)}%;
  width: ${props => 100 / props.count}%;
  left: ${props => props.percent}%;
`;
