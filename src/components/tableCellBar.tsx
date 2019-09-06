import React, { FC } from "react";
import { ResponsiveBar } from "@nivo/bar";
import _ from "lodash";

export interface Props {
  data: { [key: string]: number };
  groupsTotal: number;
  groupsHeighestValue: number;
}

export const TableCellBar: FC<Props> = ({
  data,
  groupsTotal,
  groupsHeighestValue
}) => {
  /*   console.log("bar data", data);
  console.log("bar groupsHeighestValue", groupsHeighestValue);
  console.log("bar groupsTotal", groupsTotal);
 */
  return (
    <td style={{ height: "100px" }}>
      {/*       <ResponsiveBar
        data={[data]}
        layout="horizontal"
        groupMode="grouped"
        keys={_.keys(data[0])}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ scheme: "nivo" }}
        tooltip={({ id, value }) => (
          <span>
            {id}: {`${value}%`}
          </span>
        )}
        minValue={0}
        maxValue={groupsHeighestValue}
        axisBottom={null}
        axisLeft={null}
        enableLabel={false}
        enableGridY={false}
      /> */}
    </td>
  );
};
