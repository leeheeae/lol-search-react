import React from 'react';
import styled from 'styled-components';
import RecordItem from './RecordItem';

const RecordBlock = styled.div`
  margin-top: 20px;
  padding-bottom: 5rem;
`;

// "victory"
const Record = ({ matchByMatchIdList, summoner, champInfo, spellInfo }) => {
  return (
    <RecordBlock>
      <ul>
        {matchByMatchIdList.map((item, index) => (
          <RecordItem
            targetItem={item}
            key={index}
            summoner={summoner}
            champInfo={champInfo}
            spellInfo={spellInfo}
          />
        ))}
      </ul>
    </RecordBlock>
  );
};

export default React.memo(Record);
