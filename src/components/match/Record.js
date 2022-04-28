import React from 'react';
import styled from 'styled-components';
import { tiemstamp } from '../../lib/tiemstamp';

const RecordBlock = styled.div`
  margin-top: 20px;
`;

const RecordItem = styled.li`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const Record = ({ matchByMatchIdList }) => {
  console.log(tiemstamp(5415));
  return (
    <RecordBlock>
      <ul>
        {matchByMatchIdList.map((item, index) => (
          <RecordItem key={index}>
            <div>경과시간: {tiemstamp(item.data.info.gameDuration)}</div>
          </RecordItem>
        ))}
      </ul>
    </RecordBlock>
  );
};

export default Record;
