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

  & + li {
    margin-top: 14px;
  }

  &.victory {
    background-color: #dbe4f7;

    & .game-result {
      color: #0e50d3;
    }
    & .game-length {
      color: #0e50d3;
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
    width: 100px;

    .type {
      font-size: 1rem;
      font-weight: 700;
    }
    .time-stamp {
      margin-top: 7px;
      font-size: 0.85rem;
      color: #666;

      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background-color: #aaa;
        margin: 12px 0 18px;
      }
    }
    .game-result {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .game-length {
      font-size: 0.9rem;
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
