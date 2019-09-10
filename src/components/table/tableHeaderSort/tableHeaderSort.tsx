import React, { FC, HTMLAttributes } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Table } from "semantic-ui-react";
import * as t from "../../../types";
import * as c from "../../../store/constants";

export interface Props extends HTMLAttributes<HTMLTableElement> {
  multiSort?: {
    [key: string]: "asc" | "desc";
  };
  headerTopics: string[];
  handleSort: (clickedColumn: string) => void;
}

export const TableHeaderSort: FC<Props> = ({ ...rest }) => {
  const dispatch = useDispatch();
  const multiSort = useSelector((state: t.AppState) => state.detailSort);
  const datasDetail = useSelector(
    (state: t.AppState) => state.detailDatas["original"].datas
  );
  const headerTopics = _.keys(datasDetail[0]);

  const handleSort = (clickedColumn: string): void => {
    dispatch({
      type: c.SET_DETAIL_SORT,
      payload: {
        ...multiSort,
        ...{
          [clickedColumn]: multiSort![clickedColumn] === "desc" ? "asc" : "desc"
        }
      }
    });
  };

  const setSortIcon = (
    item: string
  ): "ascending" | "descending" | undefined => {
    if (!!multiSort![item]) {
      return multiSort![item] === "asc" ? "ascending" : "descending";
    } else {
      return undefined;
    }
  };

  return (
    <Table.Header {...rest}>
      {headerTopics.map((item: string, key: number) => {
        return (
          <Table.HeaderCell
            key={key}
            sorted={setSortIcon(item)}
            onClick={() => {
              handleSort(item);
            }}
          >
            {item}
          </Table.HeaderCell>
        );
      })}
    </Table.Header>
  );
};
