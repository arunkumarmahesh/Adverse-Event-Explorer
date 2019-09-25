import React, { FC, HTMLAttributes } from "react";
import { Search, Button, Icon } from "semantic-ui-react";
import { SearchWrapper, SearchFlexbox } from "./searchBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  resultText?: string;
  searchTerm: string;
  dispatch: Function;
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchBlock: FC<Props> = ({
  label,
  resultText,
  searchTerm,
  dispatch,
  setSearchTerm,
  ...rest
}) => {
  const handleSearch = (e: any, { value }: any) => {
    dispatch(setSearchTerm(value));
  };

  return (
    <SearchWrapper {...rest}>
      {label && <label>{label}</label>}
      <SearchFlexbox>
        <Search
          onSearchChange={handleSearch}
          showNoResults={false}
          value={searchTerm}
        />
        {searchTerm && searchTerm[1] && (
          <Button
            basic={true}
            size="mini"
            icon={true}
            labelPosition="right"
            onClick={() => {
              dispatch(setSearchTerm(""));
            }}
          >
            <Icon name="close" />
            {resultText}
          </Button>
        )}
      </SearchFlexbox>
    </SearchWrapper>
  );
};
