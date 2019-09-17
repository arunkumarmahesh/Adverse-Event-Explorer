import styled from "styled-components";
import { Slider as CompoundSlider } from "react-compound-slider";

export interface StyleProps {}

export const Slider = styled(CompoundSlider)<StyleProps>`
  position: relative;
  width: 50%;
  height: 80px;
  border: 1px solid steelblue;
`;
