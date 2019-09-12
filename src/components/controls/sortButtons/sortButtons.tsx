import React, { FC } from "react";
import { Button, Icon, Ref } from "semantic-ui-react";
import _ from "lodash";
import * as t from "../../../types";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided
} from "react-beautiful-dnd";

export interface Props {
  sortItems?: t.DetailSortItem[];
  handleSort: (
    method: string,
    column: string,
    sortItems?: t.DetailSortItem[]
  ) => void;
}

export const SortButtons: FC<Props> = ({ sortItems, handleSort }) => {
  const reorder = (
    list: t.DetailSortItem[],
    startIndex: number,
    endIndex: number
  ): t.DetailSortItem[] => {
    const result: t.DetailSortItem[] = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorderdSortItems: t.DetailSortItem[] = reorder(
      sortItems!,
      result.source.index,
      result.destination.index
    );

    handleSort("reorder", "", reorderdSortItems);
  };

  const setSortIcon = (direction: string) => {
    if (direction === "asc") {
      return "arrow up";
    }
    return "arrow down";
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided: DroppableProvided) => (
            <Ref innerRef={provided.innerRef}>
              <div {...provided.droppableProps}>
                {sortItems &&
                  sortItems.map((item: t.DetailSortItem, key: number) => {
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
      {sortItems && sortItems.length > 0 && (
        <Button
          size="mini"
          icon={true}
          labelPosition="right"
          onClick={() => {
            handleSort("deleteAll", "");
          }}
        >
          <Icon name="close" />
          Remove all
        </Button>
      )}
    </div>
  );
};
