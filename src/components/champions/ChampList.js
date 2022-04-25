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
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

const ChampItem = styled.li`
  width: 70px;
  margin: 11px;
  cursor: pointer;

  .innerBox {
    position: relative;
  }

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

  .tag {
    margin: 3px 0;
    font-size: 0.82rem;
    color: #797991;
  }
`;

const TagTabs = styled.ul`
  display: inline-flex;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #797991;

  li + li {
    border-left: 1px solid #ccc;
  }
  li {
    background-color: #fff;
    padding: 1rem 1.4rem;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: 0.2s;

    &.active {
      background-color: #797991;
      color: #fff;
    }
  }
`;

const ChampList = ({ champInfo, activeIndex, onClickTab, onClickChamp }) => {
  const champRetrun = (active) => {
    if (active === 0) return champInfo;
    return champInfo.filter((item) =>
      item.tags.includes(champListTabs[active].tag),
    );
  };

  const fillterChamp = (active) => {
    switch (active) {
      case 0:
        return champRetrun(0);
      case 1:
        return champRetrun(1);
      case 2:
        return champRetrun(2);
      case 3:
        return champRetrun(3);
      case 4:
        return champRetrun(4);
      case 5:
        return champRetrun(5);
      case 6:
        return champRetrun(6);
      default:
        break;
    }
  };
  return (
    <ChampListBlock>
      <TagTabs>
        {champListTabs.map((tab, index) => (
          <li
            className={activeIndex === index ? 'active' : ''}
            onClick={() => onClickTab(index)}
            key={index}
          >
            {tab.name}
          </li>
        ))}
      </TagTabs>
      <ChampListBox>
        {fillterChamp(activeIndex).map((champ) => (
          <ChampItem key={champ.key}>
            <div onClick={() => onClickChamp(champ.id)} className="innerBox">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${champ.image.full}`}
                alt=""
              />
              <div className="name">{champ.name}</div>
            </div>
            <div>
              {champ.tags.map((tag, index) => (
                <div key={index} className="tag">
                  #{champTagsConfig[tag]}
                </div>
              ))}
            </div>
          </ChampItem>
        ))}
      </ChampListBox>
    </ChampListBlock>
  );
};

export default ChampList;
