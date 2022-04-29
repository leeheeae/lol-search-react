import React from 'react';
import styled from 'styled-components';
import { tiemstamp } from '../../lib/tiemstamp';
import { infoSearchBox } from '../../lib/infoSearch';
import {
  targetSummoner,
  gameResultSearch,
  matchGameName,
} from '../../lib/conifg';

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

  .game-info {
    width: 140px;

    .type {
      font-size: 1rem;
      font-weight: 700;
    }
    .time-stamp {
      margin-top: 6px;
      font-size: 0.84rem;
      color: #666;

      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background-color: #aaa;
        margin: 12px 0 20px;
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
  }

  .champion-info {
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
  }

  .kda-info {
    width: 170px;
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
  }

  .participants {
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
  }

  .items {
    margin-left: 30px;
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
  }
`;

const link = {
  item: 'https://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/',
};

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

  return (
    <>
      <RecordItemBlock
        className={gameResultSearch(target) === true ? 'victory' : 'defeat'}
      >
        <div className="game-info">
          <div className="type">{matchGameName(info.gameMode)}</div>
          <div className="time-stamp">7시간 전</div>
          <div className="game-result">
            {gameResultSearch(target) === true ? '승리' : '패배'}
          </div>
          <div className="game-length">{tiemstamp(info.gameDuration)}</div>
        </div>

        <div className="champion-info">
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
        </div>

        <div className="kda-info">
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
            </span>{' '}
            평점
          </div>
        </div>

        <div className="participants">
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
                  <div className="name">{part.summonerName}</div>
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
                  <div className="name">{part.summonerName}</div>
                </li>
              ))}
          </ul>
        </div>

        <div className="items">
          <ul>
            <li>{itemImage(target.item0)}</li>
            <li>{itemImage(target.item1)}</li>
            <li>{itemImage(target.item2)}</li>
            <li>{itemImage(target.item6)}</li>
            <li>{itemImage(target.item3)}</li>
            <li>{itemImage(target.item4)}</li>
            <li>{itemImage(target.item5)}</li>
          </ul>
        </div>
      </RecordItemBlock>
    </>
  );
};

export default React.memo(RecordItem);
