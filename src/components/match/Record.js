import React from 'react';
import styled from 'styled-components';

const RecordBlock = styled.div`
  margin-top: 20px;
`;

const RecordItem = styled.li`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const Record = () => {
  return (
    <RecordBlock>
      <ul>
        <RecordItem></RecordItem>
      </ul>
    </RecordBlock>
  );
};

export default Record;
