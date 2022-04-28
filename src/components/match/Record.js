import React from 'react';
import styled from 'styled-components';
import { RecordTabs, quequeTyepMatch } from '../../lib/conifg';

const RecordBlock = styled.div`
  margin-top: 4rem;
`;

const RecordTabsBlock = styled.ul`
  display: flex;

  li + li {
    margin-left: 8px;
  }

  li {
    padding: 0.8rem 1.5rem;
    border: 1px solid #ddd;
    border-radius: 3px;
    background-color: #fff;
    font-size: 0.94rem;
    font-weight: 500;
    cursor: pointer;

    &.active {
      color: #fff;
      background: #797991;
    }
  }
`;

const Record = ({ recordActive, onClickRecordTab }) => {
  quequeTyepMatch(450);

  return (
    <RecordBlock>
      <RecordTabsBlock>
        {RecordTabs.map((tab, index) => (
          <li
            onClick={() => onClickRecordTab(index)}
            key={index}
            className={recordActive === index ? 'active' : ''}
          >
            {tab}
          </li>
        ))}
      </RecordTabsBlock>
    </RecordBlock>
  );
};

export default Record;
