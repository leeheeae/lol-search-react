import React from 'react';
import styled from 'styled-components';
import SpectatorItem from './SpectatorItem';
import Response from '../common/Response';
import { gameModeConfig } from '../../lib/conifg';

const SpectatorBlock = styled.div`
  margin-top: 50px;
  width: 100%;
`;
const SpectatorInfo = styled.div`
  padding: 10px;
  border: 2px solid #000;
  border-bottom: none;
  background-color: #fff;
`;
const SpectatorList = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
  background-color: #fff;

  ul {
    width: 49%;
  }
`;

const Spectator = ({ error, summonerSpectator, champInfo, spellInfo }) => {
  return (
    <>
      <Response>
        {summonerSpectator.length !== 0 && (
          <SpectatorBlock>
            {/* <SpectatorInfo>솔로랭크 | 소환사의 협곡 | 24분 57초</SpectatorInfo> */}

            {error && <div>{error}</div>}
            {summonerSpectator.gameLength && (
              <SpectatorInfo>
                <div>
                  {gameModeConfig[summonerSpectator.gameMode]} |{' '}
                  {summonerSpectator.gameLength}
                </div>
                {/* https://static.developer.riotgames.com/docs/lol/queues.json */}
              </SpectatorInfo>
            )}
            <SpectatorList>
              <ul>
                {summonerSpectator.participants &&
                  summonerSpectator.participants
                    .filter((team) => team.teamId === 100)
                    .map((item, index) => (
                      <SpectatorItem
                        key={index}
                        summonerInfo={item}
                        champInfo={champInfo}
                        spellInfo={spellInfo}
                      />
                    ))}
              </ul>

              <ul>
                {summonerSpectator.participants &&
                  summonerSpectator.participants
                    .filter((team) => team.teamId === 200)
                    .map((item, index) => (
                      <SpectatorItem
                        key={index}
                        summonerInfo={item}
                        index={index}
                        champInfo={champInfo}
                        spellInfo={spellInfo}
                      />
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
