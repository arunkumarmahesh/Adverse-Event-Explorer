import React, { FC } from "react";
import { Rail } from "./sliderRail.styles";

export interface Props {
  getRailProps: () => any;
}

export const SliderRail: FC<Props> = ({ getRailProps }) => {
  return <Rail {...getRailProps()} />;
};
