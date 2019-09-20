import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RadioBlock } from "../../../components";
import { AppState, SummarizedBy } from "../../../types";
import { setSummarizedBy } from "../../../store/actions";
import { useRecalculatePrevalenceRange } from "../../../hooks";

interface Props {
  currentBodyGroups: any;
}
export const SummarizeBy: FC<Props> = ({ currentBodyGroups }) => {
  const dispatch = useDispatch();
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const summarizedByOptions: SummarizedBy[] = ["Participants", "Events"];
  const prevalenceFilterGroup = useSelector(
    (state: AppState) => state.prevalenceFilterGroup
  );
  const recalculatePrevalenceRange = useRecalculatePrevalenceRange();

  return (
    <RadioBlock
      label="Summarized by:"
      options={summarizedByOptions}
      checked={summarizedBy}
      handleChange={(e, { value }) => {
        recalculatePrevalenceRange(currentBodyGroups, prevalenceFilterGroup);
        dispatch(setSummarizedBy(value));
      }}
    />
  );
};
