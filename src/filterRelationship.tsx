import React, { FC } from "react";
import { Checkbox } from "semantic-ui-react";

export interface Props {
  relationship: string[];
  handlerelationshipChange: any;
}

export const FilterRelationship: FC<Props> = ({
  relationship,
  handlerelationshipChange
}) => (
  <div>
    <div>
      Relationship?<sup>E</sup>
    </div>
    <Checkbox
      label="UNLIKELY RELATED"
      onChange={handlerelationshipChange}
      value="UNLIKELY RELATED"
      checked={relationship.includes("UNLIKELY RELATED") ? true : false}
    />
    <Checkbox
      label="PROBABLY RELATED"
      onChange={handlerelationshipChange}
      value="PROBABLY RELATED"
      checked={relationship.includes("PROBABLY RELATED") ? true : false}
    />
    <Checkbox
      label="NOT RELATED"
      onChange={handlerelationshipChange}
      value="NOT RELATED"
      checked={relationship.includes("NOT RELATED") ? true : false}
    />
    <Checkbox
      label="POSSIBLY RELATED"
      onChange={handlerelationshipChange}
      value="POSSIBLY RELATED"
      checked={relationship.includes("POSSIBLY RELATED") ? true : false}
    />
    <Checkbox
      label="DEFINITELY RELATED"
      onChange={handlerelationshipChange}
      value="DEFINITELY RELATED"
      checked={relationship.includes("DEFINITELY RELATED") ? true : false}
    />
  </div>
);
