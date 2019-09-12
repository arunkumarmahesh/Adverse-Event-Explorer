import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "react-semantic-ui-range";
import { Input } from "semantic-ui-react";
import { RadioBlock } from "../../components/controls/radioBlock/radioBlock";
import { SelectBlock } from "../../components/controls/selectBlock/selectBlock";
import { SearchBlock } from "../../components/controls/searchBlock/searchBlock";
import { AppState } from "../../types";
import * as c from "../../store/constants";
import * as o from "../../utils/options";
import { CheckFilter } from "./checkfilter";

export interface Props {}

export const Filter: FC<Props> = () => {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const prevalenceRangeAll = useSelector(
    (state: AppState) => state.prevalenceRangeAll
  );
  const prevalenceRangeSelected = useSelector(
    (state: AppState) => state.prevalenceRangeSelected
  );
  const ageRangeAll = useSelector((state: AppState) => state.ageRangeAll);
  const ageRangeSelected = useSelector(
    (state: AppState) => state.ageRangeSelected
  );

  const dispatch = useDispatch();

  const prevalenceRangeSettings = {
    start: prevalenceRangeSelected,
    min: prevalenceRangeAll[0],
    max: prevalenceRangeAll[1],
    step: 1,
    onChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_PREVALENCE_RANGE_SELECTED,
        payload: value
      });
    }
  };

  const ageRangeSettings = {
    start: ageRangeSelected,
    min: ageRangeAll[0],
    max: ageRangeAll[1],
    step: 1,
    onChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_AGE_RANGE_SELECTED,
        payload: value
      });
    }
  };

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
          handleChange={(e, { value }) =>
            dispatch({ type: c.SET_GROUP_VARIABLE, payload: value })
          }
        />
        <SearchBlock label="Search by category:" />
      </div>
      <br />
      <div>
        <div>
          <p>Filter by prevalence:</p>
          <Slider
            value={prevalenceRangeSelected}
            multiple={true}
            settings={prevalenceRangeSettings}
          />
          <Input
            placeholder="from"
            value={prevalenceRangeSelected[0]}
            disabled={true}
          />{" "}
          {prevalenceRangeSelected[0]}-{prevalenceRangeSelected[1]} |{" "}
          {prevalenceRangeAll[0]}-{prevalenceRangeAll[1]}
          <Input
            placeholder="to"
            value={prevalenceRangeSelected[1]}
            disabled={true}
          />
        </div>
        <div>
          <div>Filter by age:</div>
          {}
          <Slider
            value={ageRangeSelected}
            multiple={true}
            settings={ageRangeSettings}
          />
          <Input
            placeholder="from"
            value={ageRangeSelected[0]}
            disabled={true}
          />
          {ageRangeSelected[0]}-{ageRangeSelected[1]} | {ageRangeAll[0]}-
          {ageRangeAll[1]}
          <Input placeholder="to" value={ageRangeSelected[1]} disabled={true} />
        </div>
      </div>
      <br />
      <CheckFilter />
    </div>
  );
};
