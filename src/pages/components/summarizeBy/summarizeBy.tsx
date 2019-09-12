import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RadioBlock } from "../../../components";
import { AppState, SummarizedBy } from "../../../types";
import { SET_SUMMARIZED_BY } from "../../../store/constants";

export const SummarizeBy: FC = () => {
  const dispatch = useDispatch();
  const summarizedBy = useSelector((state: AppState) => state.summarizedBy);
  const summarizedByOptions: SummarizedBy[] = ["Participants", "Events"];

  return (
    <RadioBlock
      label="Summarized by:"
      options={summarizedByOptions}
      checked={summarizedBy}
      handleChange={(e, { value }) =>
        dispatch({ type: SET_SUMMARIZED_BY, payload: value })
      }
    />
  );
};
