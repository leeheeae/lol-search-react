import React from 'react';
import styled from 'styled-components';

const SearchBlock = styled.div``;
const Input = styled.input``;
const SearchButton = styled.button``;

const Search = () => {
  return (
    <SearchBlock>
      <Input placeholder='소환사명 검색하기' />
      <SearchButton>검색</SearchButton>
    </SearchBlock>
  );
};

export default Search;
