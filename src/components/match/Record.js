import React from 'react';
import styled from 'styled-components';
import { RecordTabs } from '../../lib/conifg';

const RecordBlock = styled.div`
  margin-top: 4rem;
`;

const RecordTabsBlock = styled.ul`
  display: flex;

  li {
    border: 1px solid #ccc;
    padding: 1rem;

    &.active {
      color: blue;
    }
  }
`;

const Record = ({ recordActive, onClickRecordTab }) => {
  return (
    <RecordBlock>
      <h1>레코드</h1>
      <RecordTabsBlock>
        {RecordTabs.map((tab, index) => (
          <li
            onClick={() => onClickRecordTab(index)}
            key={index}
            className={recordActive === index ? 'active' : ''}
          >
            {index}
            {tab}
          </li>
        ))}
      </RecordTabsBlock>
    </RecordBlock>
  );
};

export default Record;
