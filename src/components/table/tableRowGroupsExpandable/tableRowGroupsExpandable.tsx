import React, { FC, MouseEvent } from "react";
import { Table } from "semantic-ui-react";
import { TableCellAccordion, CellPopup, TableRowGroups } from "../..";
import { AppState } from "../../../types";
import { useSelector, useDispatch } from "react-redux";
import { SET_EXPANDED_CATEGORIES } from "../../../store/constants";

export interface Props {
  colors: string[];
  data: any;
}

export const TableRowGroupsExpandable: FC<Props> = ({ colors, data }) => {
  const dispatch = useDispatch();
  const expandedCategories = useSelector(
    (state: AppState) => state.expandedCategories
  );
  const searchTerm = useSelector((state: AppState) => state.searchTerm);
  const expandAll = searchTerm.length > 1;

  const handleExpandCategory = (
    e: MouseEvent<HTMLDivElement>,
    { index }: any
  ) => {
    dispatch({
      type: SET_EXPANDED_CATEGORIES,
      payload: index
    });
  };

  return (
    <>
      <Table.Row>
        <TableCellAccordion
          style={{ width: "120px" }}
          title={data.name}
          index={expandedCategories}
          handleExpand={handleExpandCategory}
          expandAll={expandAll}
        />
        {data.groups.map((group: any, key: number) => {
          return (
            <CellPopup key={key} content={`${group.value}/${group.total}`}>
              <Table.Cell style={{ color: colors[key] }}>
                {`${group.percentage}%`}
              </Table.Cell>
            </CellPopup>
          );
        })}
      </Table.Row>
      {(expandedCategories.includes(data.name) || expandAll) &&
        data.subCategories.map((data: any, key: number) => (
          <TableRowGroups key={key} data={data} colors={colors} />
        ))}
    </>
  );
};
