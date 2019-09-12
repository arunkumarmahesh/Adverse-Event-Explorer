import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckBlock } from "../../components";
import * as fo from "../components/filter/filterOptions";
import * as c from "../../store/constants";
import { AppState } from "../../types";

export const CheckFilter = () => {
  const dispatch = useDispatch();
  const serious = useSelector((state: AppState) => state.serious);
  const severity = useSelector((state: AppState) => state.severity);
  const relationship = useSelector((state: AppState) => state.relationship);
  const outcome = useSelector((state: AppState) => state.outcome);

  return (
    <div className="filter">
      <CheckBlock
        label="Serious?"
        options={fo.seriousOptions}
        checked={serious}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_SERIOUS, payload: value })
        }
      />
      <CheckBlock
        label="Severity"
        options={fo.severityOptions}
        checked={severity}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_SEVERITY, payload: value })
        }
      />
      <CheckBlock
        label="Relationship"
        options={fo.relationshipOptions}
        checked={relationship}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_RELATIONSHIP, payload: value })
        }
      />
      <CheckBlock
        label="Outcome"
        options={fo.outcomeOptions}
        checked={outcome}
        handleChange={(e, { value }) =>
          dispatch({ type: c.SET_OUTCOME, payload: value })
        }
      />
    </div>
  );
};
