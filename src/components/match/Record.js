import React from 'react';
import styled from 'styled-components';
import { tiemstamp } from '../../lib/tiemstamp';

const RecordBlock = styled.div`
  margin-top: 20px;
`;

const RecordItem = styled.li`
  width: 100%;
  padding: 20px 22px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;

  & + li {
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
    width: 130px;

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
    width: 160px;
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
`;

const Record = ({ matchByMatchIdList }) => {
  return (
    <RecordBlock>
      <ul>
        {/* {matchByMatchIdList.map((item, index) => (
          <RecordItem key={index}>
            <div>승: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>KDA: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>킬관여: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>S/R: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>팀: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>아이템: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>LV/G/CS: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>경과시간: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>타입: {tiemstamp(item.data.info.gameDuration)}</div>
            <div>타입: {item.data.info.gameMode}</div>
          </RecordItem>
        ))} */}

        <RecordItem className="victory">
          <div className="game-info">
            <div className="type">무작위 총력전</div>
            <div className="time-stamp">7시간 전</div>
            <div className="game-result">승리</div>
            <div className="game-length">21분 38초</div>
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

          <div class="kda-info">
            <div class="kda">
              <span>3</span> / <span class="d">14</span> / <span>29</span>
            </div>
            <div class="ratio">
              <span>2.29:1</span> 평점
            </div>
          </div>
        </RecordItem>

        <RecordItem className="defeat">
          <div className="game-info">
            <div className="type">무작위 총력전</div>
            <div className="time-stamp">7시간 전</div>
            <div className="game-result">패배</div>
            <div className="game-length">21분 38초</div>
          </div>
        </RecordItem>
      </ul>
    </RecordBlock>
  );
};

export default Record;
