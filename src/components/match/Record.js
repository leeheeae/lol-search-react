import React from 'react';
import styled from 'styled-components';
import RecordItem from './RecordItem';

const RecordBlock = styled.div`
  margin-top: 20px;
`;

// "victory"
const Record = ({ matchByMatchIdList, summoner }) => {
  return (
    <RecordBlock>
      <ul>
        {matchByMatchIdList.map((item, index) => (
          <RecordItem targetItem={item} key={index} summoner={summoner} />
        ))}

        {/* 
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
        </RecordItem>

        <RecordItem className="defeat">
          <div className="game-info">
            <div className="type">무작위 총력전</div>
            <div className="time-stamp">7시간 전</div>
            <div className="game-result">패배</div>
            <div className="game-length">21분 38초</div>
          </div>
        </RecordItem> */}
      </ul>
    </RecordBlock>
  );
};

export default Record;
