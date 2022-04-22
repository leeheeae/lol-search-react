import React from 'react';
import styled from 'styled-components';
import SpectatorItem from './SpectatorItem';
import Response from '../common/Response';

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

const gameMode = {
  CLASSIC: '소환사의 협곡',
  ODIN: '',
  ARAM: '무작위 총력전',
  TUTORIAL: '튜토리얼',
  URF: 'URF',
  DOOMBOTSTEEMO: 'Bot',
  ONEFORALL: '',
  ASCENSION: '',
  FIRSTBLOOD: '',
  KINGPORO: '전설의 포로왕',
  SIEGE: '',
  ASSASSINATE: '',
  ARSR: '무작위 총력전',
  DARKSTAR: '',
  STARGUARDIAN: '별 수호자 침공',
  PROJECT: '프로젝트: 과충전모드',
  GAMEMODEX: '돌격! 넥서스',
  ODYSSEY: '오디세이:구출',
  NEXUSBLITZ: '뒤틀린 숲',
  ULTBOOK: '궁극기 주문서',
};

const Spectator = ({ error, summonerSpectator, champInfo, spellInfo }) => {
  return (
    <>
      <Response>
        {error && <div>{error}</div>}
        {summonerSpectator.length !== 0 && (
          <SpectatorBlock>
            {/* <SpectatorInfo>솔로랭크 | 소환사의 협곡 | 24분 57초</SpectatorInfo> */}
            <SpectatorInfo>
              {gameMode[summonerSpectator.gameMode]} |{' '}
              {summonerSpectator.gameLength}
              {/* https://static.developer.riotgames.com/docs/lol/queues.json */}
            </SpectatorInfo>
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
