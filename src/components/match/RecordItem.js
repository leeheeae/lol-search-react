import React from 'react';
import styled from 'styled-components';
import { tiemstamp } from '../../lib/tiemstamp';
import {
  targetSummoner,
  gameResultSearch,
  matchGameName,
} from '../../lib/conifg';

const RecordItemBlock = styled.div`
  width: 100%;
  padding: 20px 22px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;

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
        margin: 10px 0 18px;
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
    display: flex;
    .icon {
      position: relative;
      width: 106px;
      height: 106px;
      background-color: #fff;
      border-radius: 3px;

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
      margin-left: 10px;
      & > div {
        width: 49px;
        height: 49px;
        background-color: #fff;

        & + div {
          margin-top: 8px;
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
    width: 160px;
    display: flex;

    ul {
      width: 50%;

      li {
        display: flex;
        align-items: center;

        & + li {
          margin-top: 6px;
        }

        .icon {
          width: 20px;
          height: 20px;
          background-color: #223de4;
          border-radius: 50%;
          margin-right: 3px;
        }

        .name {
          font-size: 0.86rem;
        }
      }
    }
  }
`;

const RecordItem = ({ targetItem, summoner }) => {
  const info = targetItem.data.info;
  const target = targetSummoner(info.participants, summoner);

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
            <div className="name">스웨인</div>
          </div>
          <div className="spells">
            <div></div>
            <div></div>
          </div>
          <div className="runes"></div>
        </div>

        <div className="kda-info">
          <div className="kda">
            <span>3</span> / <span className="d">14</span> / <span>29</span>
          </div>
          <div className="ratio">
            <span>2.29:1</span> 평점
          </div>
        </div>

        <div className="participants">
          <ul>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
          </ul>
          <ul>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
            <li>
              <div className="icon"></div>
              <div className="name">ggg</div>
            </li>
          </ul>
        </div>
      </RecordItemBlock>
    </>
  );
};

export default RecordItem;
