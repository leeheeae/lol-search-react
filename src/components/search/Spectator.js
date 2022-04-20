import React from 'react';
import styled from 'styled-components';
import SpectatorItem from './SpectatorItem';
import Response from '../common/Response';

const SpectatorBlock = styled.div`
  margin-top: 50px;
  width: 100%;
`;
const SpectatorInfo = styled.div``;
const SpectatorList = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
  background-color: #fff;

  ul {
    width: 45%;
  }
`;

const Spectator = ({ error, summonerSpectator }) => {
  return (
    <>
      <Response>
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

              <ul>
                {summonerSpectator.participants &&
                  summonerSpectator.participants
                    .filter((team) => team.teamId === 200)
                    .map((item, index) => (
                      <SpectatorItem key={index} summonerInfo={item} />
                    ))}
              </ul>
            </SpectatorList>
          </SpectatorBlock>
        )}
      </Response>
    </>
  );
};

export default Spectator;
