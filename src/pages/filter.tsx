import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckboxBlock } from "../components/checkboxBlock";
import { RadioBlock } from "../components/radioBlock";
import { SelectBlock } from "../components/selectBlock";
import {
  AppState,
  summarizedByOptions,
  groupVariableOptions,
  seriousOptions,
  severityOptions,
  relationshipOptions,
  outcomeOptions
} from "../store/initialState";
import {
  SET_SUMMARIZED_BY,
  SET_GROUP_VARIABLE,
  SET_SERIOUS,
  SET_SEVERITY,
  SET_RELATIONSHIP,
  SET_OUTCOME
} from "../store/actions";

export interface Props {}

export const Filter: FC<Props> = () => {
  const groupVariable = useSelector((state: AppState) => state.groupVariable);
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);
  const dispatch = useDispatch();

  return (
    <div>
      <RadioBlock
        label="Summarized by:"
        options={summarizedByOptions}
        checked={summarizedBy}
        handleChange={(e, { value }) =>
          dispatch({ type: SET_SUMMARIZED_BY, payload: value })
        }
      />
      <SelectBlock
        label="Group Variable:"
        options={groupVariableOptions}
        selected={groupVariable}
        handleChange={(e, { value }) =>
          dispatch({ type: SET_GROUP_VARIABLE, payload: value })
        }
      />
      <CheckboxBlock
        label="Serious?"
        options={seriousOptions}
        checked={serious}
        handleChange={(e, { value }) =>
          dispatch({ type: SET_SERIOUS, payload: value })
        }
      />
      <CheckboxBlock
        label="Severity"
        options={severityOptions}
        checked={severity}
        handleChange={(e, { value }) =>
          dispatch({ type: SET_SEVERITY, payload: value })
        }
      />
      <CheckboxBlock
        label="Relationship"
        options={relationshipOptions}
        checked={relationship}
        handleChange={(e, { value }) =>
          dispatch({ type: SET_RELATIONSHIP, payload: value })
        }
      />
      <CheckboxBlock
        label="Outcome"
        options={outcomeOptions}
        checked={outcome}
        handleChange={(e, { value }) =>
          dispatch({ type: SET_OUTCOME, payload: value })
        }
      />
    </div>
  );
};
