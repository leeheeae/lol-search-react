import React from 'react';
import styled from 'styled-components';
import SearchList from './SearchList';
import { BiSearch } from 'react-icons/bi';

const SearchBlock = styled.div`
  width: 260px;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 12px;
  border: none;
  border-radius: 3px;
`;
const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -12px;
  right: 8px;
`;

const Search = ({ big, onChange, onSubmit, summoner }) => {
  return (
    <SearchBlock>
      <form onSubmit={onSubmit}>
        <Input placeholder="소환사명 검색하기" onChange={onChange} />
        <SearchButton>
          <BiSearch size="24" color="#F56D91" />
        </SearchButton>
        <SearchList summoner={summoner} />
      </form>
    </SearchBlock>
  );
};

export default Search;
