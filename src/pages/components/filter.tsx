import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckboxBlock } from "../../components/checkboxBlock";
import { RadioBlock } from "../../components/radioBlock";
import { SelectBlock } from "../../components/selectBlock";
import { SearchBlock } from "../../components/searchBlock";
import { AppState } from "../../utils/types";
import * as c from "../../store/constants";
import * as o from "../../utils/options";

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
        <SelectBlock
          label="Filter by prevalence:"
          options={o.prevalenceOptions}
          selected="0"
          handleChange={(e, { value }) =>
            dispatch({ type: c.SET_GROUP_VARIABLE, payload: value })
          }
        />
        <SearchBlock label="Search by category:" />
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
