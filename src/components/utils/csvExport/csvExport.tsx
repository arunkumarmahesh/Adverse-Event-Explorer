import React, { FC, ReactNode } from "react";
import csvDownload from "json-to-csv-export";

export interface Props {
  data: {};
  filename: string;
  children: ReactNode | ReactNode[];
}

export const CSVExport: FC<Props> = ({ data, filename, children, ...rest }) => {
  return React.cloneElement(children as never, {
    onClick: () => {
      csvDownload(data, filename);
    },
    ...rest
  });
};

export default CSVExport;
