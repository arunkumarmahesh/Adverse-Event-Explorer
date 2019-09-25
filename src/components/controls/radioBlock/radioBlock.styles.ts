import styled from "styled-components";
import { Radio as UIRadio } from "semantic-ui-react";

export const RadioWrapper = styled.div`
  padding: 1rem 0;
  label:first-child {
    font-weight: bold;
  }
`;

export const Radio = styled(UIRadio)`
  padding-top: 0.3rem;
`;
