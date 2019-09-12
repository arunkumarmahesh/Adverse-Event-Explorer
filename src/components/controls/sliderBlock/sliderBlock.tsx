import React, { FC } from "react";
import { Slider } from "react-semantic-ui-range";
import { Input } from "semantic-ui-react";

export interface Props {
  /**
   * The label shown above the slider.
   */
  label: string;
  /**
   * The selcted values of the slider.
   */
  selectedValues: [number, number] | string;
  /**
   * The range of the slider.
   */
  range: [number, number];
  /**
   * The color of the slider.
   * @default red
   */
  color: string;

  /**
   * Wether the slider selctors should change incremental or fluent.
   * @default false
   */
  discrete: boolean;
  /**
   * Wether to use multiple selectors or a single selector.
   * @default true
   */
  multiple: boolean;
  /**
   * Wether to disable the slider and the inputs.
   * @default false
   */
  disabled: boolean;
  /**
   * Wether to show no slider when disabled is true.
   * @default true
   */
  noSliderWhenDisabled: boolean;
  /**
   * The change handler when the slider or the input values will be changed.
   */
  handleChange(): any;
}

export const SliderBlock: FC<Props> = ({
  label,
  selectedValues,
  range,
  handleChange,
  color,
  disabled,
  discrete,
  multiple
}) => {
  const settings = {
    start: selectedValues,
    min: range[0],
    max: range[1],
    step: 1,
    onChange: handleChange
  };

  return (
    <div>
      <div>{label}</div>
      <Slider
        value={selectedValues}
        discrete={discrete}
        multiple={multiple}
        color={color}
        settings={settings}
        disabled={disabled}
      />
      <Input placeholder="from" value={selectedValues[0]} disabled={disabled} />
      &nbsp;-&nbsp;
      <Input placeholder="to" value={selectedValues[1]} disabled={disabled} />
    </div>
  );
};
