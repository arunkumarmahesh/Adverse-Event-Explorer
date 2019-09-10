import React, { FC } from "react";
import { Button, Icon } from "semantic-ui-react";
import _ from "lodash";
import * as t from "../types";

export interface Props {
  sortEntries?: t.DetailSort;
  handleSort: (method: string, column: string) => void;
}

export const SortButtons: FC<Props> = ({ sortEntries, handleSort }) => {
  const setSortIcon = (direction: "asc" | "desc") => {
    if (direction === "asc") {
      return "up";
    }
    return "down";
  };

  return (
    <div>
      {sortEntries &&
        Object.entries(sortEntries).map((item: any, key: number) => {
          return (
            <Button.Group icon={true} key={key}>
              <Button
                onClick={() => {
                  handleSort("deleteSingle", item[0]);
                }}
              >
                <Icon name="close" />
              </Button>
              <Button
                content={item[0]}
                icon={`arrow ${setSortIcon(item[1])}`}
                labelPosition="right"
                onClick={() => {
                  handleSort("update", item[0]);
                }}
              />
            </Button.Group>
          );
        })}
      {!_.isEmpty(sortEntries) && (
        <Button
          onClick={() => {
            handleSort("deleteAll", "");
          }}
        >
          Delete All
        </Button>
      )}
    </div>
  );
};
