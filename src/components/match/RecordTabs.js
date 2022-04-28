import React from 'react';
import styled from 'styled-components';
import {
  RecordTabsConfig,
  quequeTyepMatch,
  matchGameType,
} from '../../lib/conifg';

const RecordTabsBlock = styled.ul`
  margin-top: 5rem;
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

const RecordTabs = ({ recordActive, onClickRecordTab }) => {
  return (
    <RecordTabsBlock>
      {RecordTabsConfig.map((tab, index) => (
        <li
          onClick={() =>
            onClickRecordTab(
              index,
              quequeTyepMatch(tab),
              matchGameType(quequeTyepMatch(tab)),
            )
          }
          key={index}
          className={recordActive === index ? 'active' : ''}
        >
          {tab}
        </li>
      ))}
    </RecordTabsBlock>
  );
};

export default RecordTabs;
