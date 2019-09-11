import React, { FC } from "react";
import { Button, Icon, Ref } from "semantic-ui-react";
import _ from "lodash";
import * as t from "../types";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot
} from "react-beautiful-dnd";

export interface Props {
  sortEntries?: t.DetailSortItem[];
  handleSort: (method: string, column: string) => void;
}

export const SortButtons: FC<Props> = ({ sortEntries, handleSort }) => {
  const setSortIcon = (direction: "asc" | "desc") => {
    if (direction === "asc") {
      return "arrow up";
    }
    return "arrow down";
  };
  console.log("sortButtons sortEntries", sortEntries);
  return (
    <>
      <DragDropContext onDragEnd={() => null}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <Ref innerRef={provided.innerRef}>
              <div {...provided.droppableProps}>
                {sortEntries &&
                  sortEntries.map((item: any, key: number) => {
                    console.log("sd", item);
                    return (
                      <Draggable
                        key={item[0]}
                        draggableId={item[0]}
                        index={key}
                      >
                        {providedDraggable => (
                          <Ref innerRef={providedDraggable.innerRef}>
                            <span
                              className="sortButton"
                              {...providedDraggable.draggableProps}
                            >
                              <Icon
                                name="grab"
                                {...providedDraggable.dragHandleProps}
                              />
                              <span
                                onClick={() => {
                                  handleSort("update", item[0]);
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                {item[0]}
                                <Icon name={setSortIcon(item[1])} />
                              </span>
                              <Icon
                                name="close"
                                onClick={() => {
                                  handleSort("deleteSingle", item[0]);
                                }}
                                style={{ cursor: "pointer" }}
                              />
                            </span>
                          </Ref>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            </Ref>
          )}
        </Droppable>
      </DragDropContext>
      {!_.isEmpty(sortEntries) && (
        <Button
          onClick={() => {
            handleSort("deleteAll", "");
          }}
        >
          Delete All
        </Button>
      )}
    </>
  );
};
