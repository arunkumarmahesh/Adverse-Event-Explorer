import React, { FC, useState, SyntheticEvent } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";
import { SelectBlock } from "../../selectBlock";
import * as o from "../../../utils/options";

export interface Props {
  cellCount: number;
  dataSize: number;
  pageSize: number;
}

export const TableFooterDetails: FC<Props> = ({
  cellCount,
  dataSize,
  pageSize
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultsPerPage, setResultsPerPage] = useState<string>("10");
  const pageCount = Math.floor(dataSize / pageSize);

  console.log("pageCount", pageCount);

  const handlePrevClick = () => {
    if (currentPage <= 2) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pageCount);
    }
  };

  const renderPageItems = () => {
    let i: number;
    let children = [];
    for (i = 1; i < pageCount + 1; i++) {
      children.push(
        <Menu.Item
          key={i}
          onClick={() => {
            setCurrentPage(i);
          }}
        >
          {i}
        </Menu.Item>
      );
    }
    return children;
  };

  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>
          <SelectBlock
            label=""
            options={o.resultsPerPageOptions}
            selected={resultsPerPage}
            handleChange={(e: any) => {
              setResultsPerPage(e.currentTarget.value);
            }}
          />
        </Table.HeaderCell>
        <Table.HeaderCell colSpan={cellCount}>
          <Menu pagination>
            <Menu.Item
              icon={true}
              onClick={() => {
                handlePrevClick();
              }}
            >
              <Icon name="chevron left" />
            </Menu.Item>
            {renderPageItems()}
            <Menu.Item
              icon={true}
              onClick={() => {
                handleNextClick();
              }}
            >
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};
