import styled from "styled-components";
import { Checkbox as UICheckbox } from "semantic-ui-react";

export const CheckWrapper = styled.div`
  padding: 1rem 0;
  label:first-child {
    font-weight: bold;
  }
`;

export const Checkbox = styled(UICheckbox)`
  padding-top: 0.3rem;
`;
