import React from 'react';
import styled from 'styled-components';
import { tiemstamp, timeForToday } from '../../lib/tiemstamp';
import { infoSearchBox } from '../../lib/infoSearch';
import {
  targetSummoner,
  gameResultSearch,
  matchGameName,
  killParticipantion,
  gameModeConfig,
} from '../../lib/conifg';
import { Link } from 'react-router-dom';

const RecordItemBlock = styled.div`
  width: 100%;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;

  img {
    display: block;
    width: 100%;
  }

  & + div {
    margin-top: 14px;
  }

  &.victory {
    background-color: #d8dbef;

    & .game-result {
      color: #223de4;
    }
    & .game-length {
      color: #223de4;
    }
  }
  &.defeat {
    background-color: #ffd8d9;

    & .game-result {
      color: #d31a45;
    }
    & .game-length {
      color: #d31a45;
    }
  }
`;

const GameInfo = styled.div`
  width: 160px;

  .type {
    font-size: 1rem;
    font-weight: 700;
  }

  .quetype {
    letter-spacing: -0.3px;
    font-size: 0.84rem;
    font-weight: 400;
    margin-left: 3px;
    color: #666;
  }
  .time-stamp {
    margin-top: 8px;
    font-size: 0.84rem;
    color: #666;

    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: #aaa;
      margin: 10px 0 20px;
    }
  }
  .game-result {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .game-length {
    font-size: 0.86rem;
  }
`;

const KdaInfo = styled.div`
  width: 190px;
  text-align: center;

  .kda {
    letter-spacing: -0.5px;
    font-size: 1.16rem;
    font-weight: 800;
  }

  .ratio {
    margin-top: 6px;
    font-size: 0.84rem;
    color: #555;

    span {
      font-weight: 500;
    }
  }
`;

const Participants = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;

  ul {
    width: 48%;

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 6px;
      }

      .icon {
        min-width: 20px;
        min-height: 20px;
        max-width: 20px;
        max-width: 20px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 4px;
        overflow: hidden;
      }

      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.82rem;

        &.target {
          font-weight: 900;
        }
      }
    }
  }
`;

const ChampInfo = styled.div`
  .icon {
    position: relative;
    width: 70px;
    height: 70px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;

    .name {
      width: 100%;
      position: absolute;
      bottom: 0px;
      padding: 5px 0;
      font-size: 0.86rem;
      font-weight: 500;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
    }
  }
  .spells {
    margin-top: 6px;
    display: flex;

    & > div {
      width: 32px;
      height: 32px;
      background-color: #fff;

      & + div {
        margin-left: 6px;
      }
    }
  }
  .runes {
  }
`;

const Items = styled.div`
  margin-right: 50px;
  ul {
    width: 112px;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 24px;
      height: 24px;
      background-color: #ccc;
      margin: 2px;
      border-radius: 3px;
      overflow: hidden;
    }
  }
`;

const Kills = styled.div`
  margin-top: 10px;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0.34rem 0.6rem;
  border: 1px solid #d31a45;
  border-radius: 1rem;
  background-color: #fff;
  color: #d31a45;
`;

const StateInfo = styled.div`
  margin-right: 60px;
  font-size: 0.94rem;

  & > div {
    margin: 8px 0;
  }
  .kill-participantion {
    margin-top: 12px;
    font-weight: 500;
    color: #d31a45;
  }
`;

const RecordItem = ({ targetItem, summoner, champInfo, spellInfo }) => {
  const info = targetItem.data.info;
  const target = targetSummoner(info.participants, summoner);

  const itemImage = (item) => {
    if (item === 0) return null;
    return (
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${item}.png`}
        alt={item}
      />
    );
  };

  const killsCheck = (target) => {
    if (target.pentaKills > 0) {
      //펜타킬
      return <Kills>펜타킬</Kills>;
    }
    if (target.quadraKills > 0) {
      //쿼드라킬
      return <Kills>쿼드라킬</Kills>;
    }
    if (target.tripleKills > 0) {
      //tripleKills
      return <Kills>트리플킬</Kills>;
    }
    if (target.doubleKills > 0) {
      //더블킬
      return <Kills>더블킬</Kills>;
    }
  };

  //킬관여
  const killParticipantion = (info, target) => {
    const totalKill = info.teams
      .filter((team) => team.teamId === target.teamId)
      .map((targeteam) => targeteam.objectives.champion.kills);

    const result = Math.round(
      ((target.kills + target.assists) / totalKill) * 100,
    );
    return `${result}%`;
  };

  if (!target) return;

  return (
    <>
      <RecordItemBlock
        className={gameResultSearch(target) === true ? 'victory' : 'defeat'}
      >
        <GameInfo>
          <div className="type">
            {gameModeConfig[info.gameMode]}
            <span className="quetype">({matchGameName(info.queueId)})</span>
          </div>
          <div className="time-stamp">
            {timeForToday(info.gameEndTimestamp)}
          </div>
          <div className="game-result">
            {gameResultSearch(target) === true ? '승리' : '패배'}
          </div>
          <div className="game-length">{tiemstamp(info.gameDuration)}</div>
        </GameInfo>

        <ChampInfo>
          <div className="icon">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${
                infoSearchBox(champInfo, target.championId).image.full
              }`}
              alt="champ-icon"
            />
            <div className="name">{target.championName}</div>
          </div>
          <div className="spells">
            <div>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/${
                  infoSearchBox(spellInfo, target.summoner1Id).image.full
                }`}
                alt="spell"
              />
            </div>
            <div>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/${
                  infoSearchBox(spellInfo, target.summoner2Id).image.full
                }`}
                alt="spell"
              />
            </div>
          </div>
          <div className="runes"></div>
        </ChampInfo>

        <KdaInfo>
          <div className="kda">
            <span>{target.kills}</span> /{' '}
            <span className="d">{target.deaths}</span> /{' '}
            <span>{target.assists}</span>
          </div>
          <div className="ratio">
            <span>
              {Math.ceil(
                ((target.kills + target.assists) / target.deaths) * 100,
              ) / 100}
            </span>
            평점
          </div>
          <div className="kills">{killsCheck(target)}</div>
        </KdaInfo>

        <Items>
          <ul>
            <li>{itemImage(target.item0)}</li>
            <li>{itemImage(target.item1)}</li>
            <li>{itemImage(target.item2)}</li>
            <li>{itemImage(target.item6)}</li>
            <li>{itemImage(target.item3)}</li>
            <li>{itemImage(target.item4)}</li>
            <li>{itemImage(target.item5)}</li>
          </ul>
        </Items>

        <StateInfo>
          <div className="level">레벨 {target.champLevel}</div>
          <div className="cs">121 (5.1)CS</div>
          <div className="kill-participantion">
            킬관여 {killParticipantion(info, target)}
          </div>
          {/* <div className="kill-participantion">킬관여 60%</div> */}
        </StateInfo>

        <Participants>
          <ul>
            {info.participants
              .filter((t) => t.teamId === 100)
              .map((part) => (
                <li key={part.summonerId}>
                  <div className="icon">
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${
                        infoSearchBox(champInfo, part.championId).image.full
                      }`}
                      alt="champ-icon"
                    />
                  </div>
                  <div className="name">
                    <Link to={`/search/${part.summonerName}`}>
                      {part.summonerName}
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
          <ul>
            {info.participants
              .filter((t) => t.teamId === 200)
              .map((part) => (
                <li key={part.summonerId}>
                  <div className="icon">
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${
                        infoSearchBox(champInfo, part.championId).image.full
                      }`}
                      alt="champ-icon"
                    />
                  </div>
                  <div className="name">
                    <Link to={`/search/${part.summonerName}`}>
                      {part.summonerName}
                    </Link>
                  </div>
                </li>
              ))}
          </ul>
        </Participants>
      </RecordItemBlock>
    </>
  );
};

export default React.memo(RecordItem);
