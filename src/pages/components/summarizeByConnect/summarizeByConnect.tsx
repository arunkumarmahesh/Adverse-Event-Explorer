import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RadioBlock } from "../../../components";
import { AppState, SummarizedBy } from "../../../types";
import { setSummarizedBy } from "../../../store/actions";

interface Props {}

export const SummarizeByConnect: FC<Props> = () => {
  const dispatch = useDispatch();
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const summarizedByOptions: SummarizedBy[] = ["Participants", "Events"];

  return (
    <RadioBlock
      label="Summarized by:"
      options={summarizedByOptions}
      checked={summarizedBy}
      handleChange={(e, { value }) => {
        dispatch(setSummarizedBy(value));
      }}
    />
  );
};
