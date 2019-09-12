import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "react-semantic-ui-range";
import { Input } from "semantic-ui-react";
import {
  RadioBlock,
  SelectBlock,
  SearchBlock,
  SliderBlock
} from "../../../components";
import { AppState } from "../../../types";
import * as c from "../../../store/constants";
import * as o from "../../../utils/options";
import { CheckFilter } from "../checkfilter";
import { usePrevalenceFilter, useAgeFilter } from "../../../hooks";

export interface Props {}

export const Filter: FC<Props> = () => {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const prevalenceFilterOptions = usePrevalenceFilter();
  const ageFilterOptions = useAgeFilter();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="filter">
        <RadioBlock
          label="Summarized by:"
          options={o.summarizedByOptions}
          checked={summarizedBy}
          handleChange={(e, { value }) =>
            dispatch({ type: c.SET_SUMMARIZED_BY, payload: value })
          }
        />
        <SelectBlock
          label="Group Variable:"
          options={o.groupVariableOptions}
          selected={groupVariable}
          handleChange={(e, { value }) => {
            dispatch({ type: c.SET_GROUP_VARIABLE, payload: value });
          }}
        />
        <SearchBlock label="Search by category:" />
      </div>
      <br />
      <div>
        <SliderBlock {...prevalenceFilterOptions} />
        <SliderBlock {...ageFilterOptions} />
      </div>
      <br />
      <CheckFilter />
    </div>
  );
};
