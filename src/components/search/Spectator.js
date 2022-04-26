import React from 'react';
import styled from 'styled-components';
import SpectatorItem from './SpectatorItem';
import Response from '../common/Response';
import { gameModeConfig } from '../../lib/conifg';

const SpectatorBlock = styled.div`
  margin-top: 50px;
  width: 100%;
  padding-bottom: 5rem;
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

const Spectator = ({
  error,
  summonerSpectator,
  champList,
  spellInfo,
  infoView,
}) => {
  if (error)
    return (
      <>
        <Response>
          <div style={{ marginTop: '3rem' }}>{error}</div>
        </Response>
      </>
    );

  return (
    <>
      {infoView && (
        <>
          {summonerSpectator.length !== 0 && (
            <SpectatorBlock>
              {summonerSpectator.gameLength && (
                <SpectatorInfo>
                  <div>
                    {gameModeConfig[summonerSpectator.gameMode]} |
                    {summonerSpectator.gameLength}
                  </div>
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
                          champInfo={champList}
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
                          champInfo={champList}
                          spellInfo={spellInfo}
                        />
                      ))}
                </ul>
              </SpectatorList>
            </SpectatorBlock>
          )}
        </>
      )}
    </>
  );
};

export default Spectator;
