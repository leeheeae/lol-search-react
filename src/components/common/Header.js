import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchContainer from '../../containers/summoner/SearchContainer';

const HeaderBlock = styled.header`
  width: 100%;
  background-color: #8d8daa;

  .inner-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: auto;
    padding: 20px;

    .logo {
      display: inline-block;
      font-size: 1.6rem;
      color: #fff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <div className="inner-header">
        <Link to="/">
          <h1 className="logo">희애</h1>
        </Link>
        <SearchContainer />
      </div>
    </HeaderBlock>
  );
};

export default Header;
