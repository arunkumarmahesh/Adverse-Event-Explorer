import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Slider } from "react-semantic-ui-range";
import { Input } from "semantic-ui-react";
import { CheckboxBlock } from "../../components/checkboxBlock";
import { RadioBlock } from "../../components/radioBlock";
import { SelectBlock } from "../../components/selectBlock";
import { SearchBlock } from "../../components/searchBlock";
import { AppState } from "../../utils/types";
import * as c from "../../store/constants";
import * as o from "../../utils/options";
import { statement } from "@babel/template";

export interface Props {}

export const Filter: FC<Props> = () => {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const prevalenceRange = useSelector(
    (state: AppState) => state.prevalenceRange
  );
  const ageRange = useSelector((state: AppState) => state.ageRange);
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);
  const dispatch = useDispatch();

  const prevalenceSettings = {
    start: prevalenceRange,
    min: 0,
    max: 100,
    step: 1,
    onChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_PREVALENCE_RANGE,
        payload: value
      });
    }
  };
  const ageSettings = {
    start: ageRange,
    min: 0,
    max: 100,
    step: 1,
    onChange: (value: [number, number]) => {
      dispatch({
        type: c.SET_AGE_RANGE,
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
            value={prevalenceRange}
            discrete={true}
            multiple={true}
            color="red"
            settings={prevalenceSettings}
          />
          <Input
            placeholder="from"
            value={prevalenceRange[0]}
            disabled={true}
          />{" "}
          -{" "}
          <Input placeholder="to" value={prevalenceRange[1]} disabled={true} />
        </div>
        <div>
          <div>Filter by age:</div>
          <Slider
            value={ageRange}
            discrete={true}
            multiple={true}
            color="red"
            settings={ageSettings}
          />
          <Input placeholder="from" value={ageRange[0]} disabled={true} /> -{" "}
          <Input placeholder="to" value={ageRange[1]} disabled={true} />
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
