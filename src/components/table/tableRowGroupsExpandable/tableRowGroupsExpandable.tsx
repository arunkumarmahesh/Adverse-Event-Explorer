import React, { FC } from "react";
import { Table } from "semantic-ui-react";
import { TableCellAccordion, CellPopup, TableRowGroups } from "../..";
import { AppState } from "../../../types";
import { useSelector, useDispatch } from "react-redux";
import { setExpandedCategories } from "../../../store/actions";

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

  const handleExpandCategory = (e: any, { index }: any) => {
    dispatch(setExpandedCategories(index));
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
            <CellPopup
              key={group.name}
              content={`${group.value}/${group.total}`}
            >
              <Table.Cell style={{ color: colors[key] }} textAlign="center">
                {`${group.percentage}%`}
              </Table.Cell>
            </CellPopup>
          );
        })}
      </Table.Row>
      {(expandedCategories.includes(data.name) || expandAll) &&
        data.subCategories.map((data: any) => {
          return <TableRowGroups key={data.name} data={data} colors={colors} />;
        })}
    </>
  );
};
