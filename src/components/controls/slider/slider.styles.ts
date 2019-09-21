import styled from "styled-components";
import { Slider as CompoundSlider } from "react-compound-slider";

export interface StyleProps {}

export const Slider = styled(CompoundSlider)<StyleProps>`
  position: relative;
  width: 50%;
  height: 65px;
`;

export const SliderWrapper = styled.div`
  padding: 0 10px;
`;
