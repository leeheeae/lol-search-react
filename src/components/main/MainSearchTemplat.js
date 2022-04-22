import React from 'react';
import styled from 'styled-components';

const MainSearchTempletBlock = styled.div`
  width: 100%;
  height: 380px;
  background-color: #666;
  background: url('./images/Challenges_Launch_Final.jpg');
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
