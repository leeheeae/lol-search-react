import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/Challenges_Launch_Final.jpg';

const MainSearchTempletBlock = styled.div`
  width: 100%;
  height: 380px;
  background: url(${img});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const mainSearchTemplet = ({ children }) => {
  return (
    <>
      <MainSearchTempletBlock>{children}</MainSearchTempletBlock>
    </>
  );
};

export default mainSearchTemplet;
