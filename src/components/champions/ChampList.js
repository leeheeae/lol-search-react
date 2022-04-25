import React, { useState } from 'react';
import styled from 'styled-components';
import { infoSearchBox } from '../../lib/infoSearch';
import { tagCheck } from '../../lib/infoSearch';
import { champTagsConfig } from '../../lib/conifg';
import { champListTabs } from '../../lib/conifg';

const ChampListBlock = styled.div`
  margin-top: 5rem;
`;

const ChampListBox = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const ChampItem = styled.li`
  width: 70px;
  margin: 11px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    border-radius: 3px;
  }
  .name {
    padding: 3px 0;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    letter-spacing: -0.5px;
    color: #fff;
    position: absolute;
    width: 100%;
    bottom: 2px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const TagTabs = styled.ul`
  display: flex;

  li {
    padding: 10px;
    border: 1px solid #ccc;

    &.active {
      color: red;
    }
  }
`;

const ChampList = ({ champInfo, activeIndex, onClickTab, onClickChamp }) => {
  return (
    <ChampListBlock>
      <TagTabs>
        {champListTabs.map((tab, index) => (
          <li
            className={activeIndex === index ? 'active' : ''}
            onClick={() => onClickTab(index)}
            key={index}
          >
            {tab}
          </li>
        ))}
      </TagTabs>{' '}
      <ChampListBox>
        {champInfo.map((champ) => (
          <ChampItem key={champ.key}>
            <div onClick={() => onClickChamp(champ.id)}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${champ.image.full}`}
                alt=""
              />
            </div>
            <div className="name">{champ.name}</div>
            {/* <div>
            태그 :
            {champ.tags.map((tag, index) => (
              <span key={index}>#{champTagsConfig[tag]}</span>
            ))}
          </div> */}
          </ChampItem>
        ))}
      </ChampListBox>
    </ChampListBlock>
  );
};

export default ChampList;
