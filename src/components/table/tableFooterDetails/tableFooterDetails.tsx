import React, { FC } from "react";
import { Table, Pagination, Select } from "semantic-ui-react";
import { SelectOptions } from "../../../types";

export const resultsPerPageOptions: SelectOptions[] = [
  { key: "5", value: "5", text: "5" },
  { key: "10", value: "10", text: "10" },
  { key: "25", value: "25", text: "25" },
  { key: "50", value: "50", text: "50" }
];

export interface Props {
  columnCount: number;
  dataSize: number;
  resultsPerPage: number;
  currentPage: number;
  handleResultsPerPageChange: any;
  handlePaginationChange: any;
}

export const TableFooterDetails: FC<Props> = ({
  columnCount,
  dataSize,
  resultsPerPage,
  currentPage,
  handleResultsPerPageChange,
  handlePaginationChange
}) => {
  const pageCount = Math.ceil(dataSize / resultsPerPage);

  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>
          <Select
            options={resultsPerPageOptions}
            onChange={handleResultsPerPageChange}
            value={resultsPerPage.toString()}
          />
        </Table.HeaderCell>
        <Table.HeaderCell colSpan={columnCount}>
          <Pagination
            activePage={currentPage}
            totalPages={pageCount}
            onPageChange={handlePaginationChange}
          />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};
