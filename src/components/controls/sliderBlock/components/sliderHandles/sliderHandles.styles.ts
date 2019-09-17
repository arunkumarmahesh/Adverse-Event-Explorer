import styled from "styled-components";

export interface HandlesProps {}

export const Handles = styled.div<HandlesProps>``;

export interface HandleProps {
  percent: number;
}

export const Handle = styled.div<HandleProps>`
  left: ${props => props.percent}%;
  position: absolute;
  margin-left: -15px;
  margin-top: 25px;
  z-index: 2;
  width: 30px;
  height: 30px;
  border: 0;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #2c4870;
  color: #333;
`;

export interface HandleInnerProps {}

export const HandleInner = styled.div<HandleInnerProps>`
  font-family: "Roboto";
  font-size: 11px;
  margin-top: -20px;
`;
