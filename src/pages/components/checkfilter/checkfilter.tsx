import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckBlock } from "../../../components";
import * as o from "./checkFilterOptions";
import * as c from "../../../store/constants";
import { AppState } from "../../../types";

export interface Props {
  disabled?: boolean;
}

export const CheckFilter: FC<Props> = ({ disabled }) => {
  const dispatch = useDispatch();
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);

  return (
    <div className="filter">
      <CheckBlock
        label="Serious?"
        options={o.seriousOptions}
        checked={serious}
        disabled={disabled}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_SERIOUS, payload: value })
        }
      />
      <CheckBlock
        label="Severity"
        options={o.severityOptions}
        checked={severity}
        disabled={disabled}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_SEVERITY, payload: value })
        }
      />
      <CheckBlock
        label="Relationship"
        options={o.relationshipOptions}
        checked={relationship}
        disabled={disabled}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_RELATIONSHIP, payload: value })
        }
      />
      <CheckBlock
        label="Outcome"
        options={o.outcomeOptions}
        checked={outcome}
        disabled={disabled}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_OUTCOME, payload: value })
        }
      />
    </div>
  );
};
