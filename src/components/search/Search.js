import React from 'react';
import styled from 'styled-components';
import SearchList from './SearchList';

const SearchBlock = styled.div``;
const Input = styled.input``;
const SearchButton = styled.button``;

const Search = ({ onChange, onSubmit, summoner }) => {
  return (
    <SearchBlock>
      <form onSubmit={onSubmit}>
        <Input placeholder='소환사명 검색하기' onChange={onChange} />
        <SearchButton>검색</SearchButton>
        <SearchList summoner={summoner} />
      </form>
    </SearchBlock>
  );
};

export default Search;
