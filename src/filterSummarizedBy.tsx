import React, { FC, FormEvent } from "react";
import { Radio } from "semantic-ui-react";

export interface Props {
  summarizedBy: string;
  handleSummarizedByChange: (
    e: FormEvent<HTMLInputElement>,
    value: any // Semantic UI CheckboxProps are any too
  ) => void;
}

export const FilterSummarizedBy: FC<Props> = ({
  summarizedBy,
  handleSummarizedByChange
}) => (
  <div>
    <Radio
      label="Participants"
      onChange={handleSummarizedByChange}
      value="Participants"
      checked={summarizedBy === "Participants" ? true : false}
    />
    <Radio
      label="Events"
      onChange={handleSummarizedByChange}
      value="Events"
      checked={summarizedBy === "Events" ? true : false}
    />
  </div>
);
