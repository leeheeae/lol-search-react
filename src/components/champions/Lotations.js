import React from 'react';
import styled from 'styled-components';
import { infoSearchBox } from '../../lib/infoSearch';

const LotationsBlock = styled.li`
  margin: 10px 10px;
  position: relative;
  width: 60px;
  cursor: pointer;

  .name {
    width: 100%;
    padding: 3px;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    position: absolute;
    color: #fff;
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -1px;
  }
`;
const ChampImg = styled.img`
  width: 100%;
  display: block;
  margin-right: 10px;
`;

const Lotations = ({ loationsChamps, champList, onClickChamp }) => {
  return (
    <>
      {loationsChamps.map((champ) => (
        <LotationsBlock
          onClick={() => onClickChamp(infoSearchBox(champList, champ).id)}
          key={champ}
        >
          <ChampImg
            src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${
              infoSearchBox(champList, champ).image.full
            }`}
            alt="champ-icon"
          />
          <p className="name">{infoSearchBox(champList, champ).name}</p>
        </LotationsBlock>
      ))}
    </>
  );
};

export default Lotations;
