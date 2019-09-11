import React, { FC } from "react";
import { Button, Icon, Ref } from "semantic-ui-react";
import _ from "lodash";
import * as t from "./src/types";
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

  return (
    <>
      <DragDropContext onDragEnd={() => null}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <Ref innerRef={provided.innerRef}>
              <div {...provided.droppableProps}>
                {sortEntries &&
                  Object.entries(sortEntries).map((item: any, key: number) => {
                    return (
                      <Draggable
                        key={item[0]}
                        draggableId={item[0]}
                        index={key}
                      >
                        {providedDraggable => (
                          <Ref innerRef={providedDraggable.innerRef}>
                            <Button.Group
                              icon={true}
                              {...providedDraggable.draggableProps}
                            >
                              <Button
                                icon="grab"
                                {...providedDraggable.dragHandleProps}
                              />
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
