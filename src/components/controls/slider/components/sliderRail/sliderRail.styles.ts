import styled from "styled-components";

export interface RailProps {}

export const Rail = styled.div<RailProps>`
  position: absolute;
  width: 100%;
  height: 10px;
  margin-top: 25px;
  border-radius: 5px;
  background-color: silver;
  cursor: pointer;
`;
