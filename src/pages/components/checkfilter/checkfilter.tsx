import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckBlock } from "../../../components";
import * as o from "./checkFilterOptions";
import * as a from "../../../store/actions";
import { AppState } from "../../../types";

export interface Props {
  disabled?: boolean;
}

export const CheckFilter: FC<Props> = ({ disabled }) => {
  const dispatch = useDispatch();
  const serious = useSelector((state: AppState) => state.seriousFilter);
  const severity = useSelector((state: AppState) => state.severityFilter);
  const relationship = useSelector(
    (state: AppState) => state.relationshipFilter
  );
  const outcome = useSelector((state: AppState) => state.outcomeFilter);

  return (
    <div className="filter">
      <CheckBlock
        label="Serious?"
        options={o.seriousFilterOptions}
        checked={serious}
        disabled={disabled}
        handleChange={(value: string) => dispatch(a.setSeriousFilter(value))}
      />
      <CheckBlock
        label="Severity"
        options={o.severityFilterOptions}
        checked={severity}
        disabled={disabled}
        handleChange={(value: string) => dispatch(a.setSeverityFilter(value))}
      />
      <CheckBlock
        label="Relationship"
        options={o.relationshipFilterOptions}
        checked={relationship}
        disabled={disabled}
        handleChange={(value: string) =>
          dispatch(a.setRelationshipFilter(value))
        }
      />
      <CheckBlock
        label="Outcome"
        options={o.outcomeFilterOptions}
        checked={outcome}
        disabled={disabled}
        handleChange={(value: string) => dispatch(a.setOutcomeFilter(value))}
      />
    </div>
  );
};
