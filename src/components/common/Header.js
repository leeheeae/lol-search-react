import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchContainer from '../../containers/summoner/SearchContainer';

const HeaderBlock = styled.header`
  width: 100%;
  /* background-color: #8d8daa; */
  background-color: #131629;

  .inner-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    margin: auto;
    padding: 20px 0;

    .logo {
      display: inline-block;
      font-size: 1.6rem;
      a {
        color: #fff;
      }
    }
  }
`;

const Lnb = styled.nav`
  ul {
    display: flex;

    li {
      a {
        padding: 10px 30px;
        color: #fff;
        opacity: 0.7;
      }

      &:hover a {
        opacity: 1;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <div className="inner-header">
        <h1 className="logo">
          <Link to="/">LOL SEARCH</Link>
        </h1>
        <Lnb>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/champ">챔피언 분석</Link>
            </li>
            <li>
              <Link to="/">랭킹</Link>
            </li>
            <li>
              <Link to="/">관전하기</Link>
            </li>
          </ul>
        </Lnb>
        <SearchContainer />
      </div>
    </HeaderBlock>
  );
};

export default Header;
