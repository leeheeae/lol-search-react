import React from 'react';
import styled, { css } from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SearchBlock = styled.div`
  width: 260px;
  position: relative;

  ${(props) =>
    props.big &&
    css`
      width: 480px;
      margin: auto;
    `}

  .link {
    display: inline-block;
    margin-top: 10px;
    color: #fff;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 13px;
  border: none;
  border-radius: 3px;

  ${(props) =>
    props.big &&
    css`
      padding: 18px;
      font-size: 15px;
    `}
`;
const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-45%);
  right: 8px;
`;

const Search = ({ big, onChange, onSubmit }) => {
  return (
    <SearchBlock big={big}>
      <form onSubmit={onSubmit}>
        <Input placeholder="소환사명 검색하기" onChange={onChange} big={big} />
        <SearchButton>
          <BiSearch size={big ? '32' : '24'} color="#F56D91" />
        </SearchButton>
      </form>
      {big && (
        <Link to={`/search/hideonbush`} className="link">
          #hide on bush
        </Link>
      )}
    </SearchBlock>
  );
};

export default Search;
