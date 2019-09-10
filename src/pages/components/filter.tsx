import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "react-semantic-ui-range";
import { Input } from "semantic-ui-react";
import { CheckboxBlock } from "../../components/checkboxBlock";
import { RadioBlock } from "../../components/radioBlock";
import { SelectBlock } from "../../components/selectBlock";
import { SearchBlock } from "../../components/searchBlock";
import { AppState } from "../../types";
import * as c from "../../store/constants";
import * as o from "../../utils/options";

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
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);
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
            discrete={true}
            multiple={true}
            color="red"
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
            discrete={true}
            multiple={true}
            color="red"
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
      <div className="filter">
        <CheckboxBlock
          label="Serious?"
          options={o.seriousOptions}
          checked={serious}
          handleChange={(e, { value }) =>
            dispatch({ type: c.SET_SERIOUS, payload: value })
          }
        />
        <CheckboxBlock
          label="Severity"
          options={o.severityOptions}
          checked={severity}
          handleChange={(e, { value }) =>
            dispatch({ type: c.SET_SEVERITY, payload: value })
          }
        />
        <CheckboxBlock
          label="Relationship"
          options={o.relationshipOptions}
          checked={relationship}
          handleChange={(e, { value }) =>
            dispatch({ type: c.SET_RELATIONSHIP, payload: value })
          }
        />
        <CheckboxBlock
          label="Outcome"
          options={o.outcomeOptions}
          checked={outcome}
          handleChange={(e, { value }) =>
            dispatch({ type: c.SET_OUTCOME, payload: value })
          }
        />
      </div>
    </div>
  );
};
