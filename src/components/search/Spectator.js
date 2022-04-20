import React from 'react';
import styled from 'styled-components';
import SpectatorItem from './SpectatorItem';

const SpectatorBlock = styled.div`
  width: 100%;
  border: 1px solid #ccc;
`;
const SpectatorInfo = styled.div``;
const SpectatorList = styled.div`
  display: flex;
  border: 2px solid #000;

  ul {
    width: 50%;
  }
`;

const Spectator = ({ error, summonerSpectator }) => {
  return (
    <>
      {error && <div>{error}</div>}
      {summonerSpectator.length !== 0 && (
        <SpectatorBlock>
          <SpectatorInfo>솔로랭크 | 소환사의 협곡 | 14분 57초</SpectatorInfo>
          <SpectatorList>
            <ul>
              {summonerSpectator.participants &&
                summonerSpectator.participants
                  .filter((team) => team.teamId === 100)
                  .map((item, index) => (
                    <SpectatorItem key={index} summonerInfo={item} />
                  ))}
            </ul>
          </SpectatorList>
        </SpectatorBlock>
      )}
    </>
  );
};

export default Spectator;
