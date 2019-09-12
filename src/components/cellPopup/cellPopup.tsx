import React, { FC, ReactNode } from "react";
import { Popup } from "semantic-ui-react";

export interface Props {
  content: string | number;
  children: ReactNode;
}

export const CellPopup: FC<Props> = ({ content, children }) => (
  <Popup
    content={content}
    size="tiny"
    inverted={true}
    offset="0, -10px"
    mouseEnterDelay={500}
    pinned={true}
    position="top center"
    trigger={children}
  />
);
