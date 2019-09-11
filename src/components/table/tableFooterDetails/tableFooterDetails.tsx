import React, { FC, useState } from "react";
import { Table, Pagination, Select } from "semantic-ui-react";
import * as o from "../../../utils/options";

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
  const pageCount = Math.floor(dataSize / resultsPerPage);

  console.log("lsdklsakdlsakdla", currentPage);
  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>
          <Select
            options={o.resultsPerPageOptions}
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
