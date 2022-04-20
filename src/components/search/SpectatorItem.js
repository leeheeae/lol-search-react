import React from 'react';
import styled from 'styled-components';

const SpectatorItemBlock = styled.div`
  padding: 20px;
`;
const TierIcon = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: pink;
`;

const SpectatorItem = () => {
  return (
    <SpectatorItemBlock>
      <TierIcon>GM</TierIcon>
    </SpectatorItemBlock>
  );
};

export default SpectatorItem;
