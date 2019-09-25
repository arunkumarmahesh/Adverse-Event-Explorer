import styled from "styled-components";

export interface Props {
  labelPosition?: "top" | "left";
}

export const SelectWrapper = styled.div<Props>`
  padding: 1rem 0;
  display: flex;
  flex-direction: ${props =>
    props.labelPosition === "left" ? "row" : "column"};
  align-items: ${props =>
    props.labelPosition === "left" ? "center" : "flex-start"};
  justify-content: flex-start;
  label {
    font-weight: bold;
  }
`;
