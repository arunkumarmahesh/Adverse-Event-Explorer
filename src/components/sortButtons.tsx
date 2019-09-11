import React, { FC } from "react";
import { Button, Icon, Ref } from "semantic-ui-react";
import _ from "lodash";
import * as t from "../types";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided
} from "react-beautiful-dnd";

export interface Props {
  sortEntries?: t.DetailSortItem[];
  handleSort: (method: string, column: string) => void;
}

export const SortButtons: FC<Props> = ({ sortEntries, handleSort }) => {
  const setSortIcon = (direction: string) => {
    if (direction === "asc") {
      return "arrow up";
    }
    return "arrow down";
  };
  return (
    <>
      <DragDropContext onDragEnd={() => null}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided: DroppableProvided) => (
            <Ref innerRef={provided.innerRef}>
              <div {...provided.droppableProps}>
                {sortEntries &&
                  sortEntries.map((item: t.DetailSortItem, key: number) => {
                    const values = Object.values(item);
                    const columnName = values[0];
                    const sortDirection = values[1];
                    return (
                      <Draggable
                        key={values[0]}
                        draggableId={columnName}
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
                                  handleSort("update", columnName);
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                {columnName}
                                <Icon name={setSortIcon(sortDirection)} />
                              </span>
                              <Icon
                                name="close"
                                onClick={() => {
                                  handleSort("deleteSingle", columnName);
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
      {sortEntries && sortEntries.length > 0 && (
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
