import styled from "styled-components";
import { Search as UISearch } from "semantic-ui-react";

export const SearchWrapper = styled.div`
  padding: 1rem 0;
  label {
    font-weight: bold;
  }
`;

export const SearchFlexbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Search = styled(UISearch)`
  padding-top: 0.3rem;
`;
