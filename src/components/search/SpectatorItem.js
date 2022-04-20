import React from 'react';
import styled from 'styled-components';
import data from '../../db/spell.json';

const SpectatorItemBlock = styled.li`
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
`;
const TierIcon = styled.div`
  display: inline-block;
  padding: 6px 8px;
  background-color: pink;
  font-size: 13px;
`;
const InfoBox = styled.div`
  h2 {
    font-size: 15px;
    font-weight: 600;
    color: #000;
  }
  .spell-box {
    margin-top: 10px;
    display: flex;
    img {
      display: block;
      width: 30px;
      height: 30px;
      background-color: #000;
      border-radius: 3px;
    }
    img + img {
      margin-left: 4px;
    }
  }
`;

const SpectatorItem = ({ summonerInfo }) => {
  const spellSearchBox = (data, spell) => {
    const result = Object.keys(data)
      .map((key, i) => data[key])
      .filter((itemKey) => itemKey.key === spell.toString());
    console.log(result);
    return result;
  };

  return (
    <>
      {summonerInfo && (
        <SpectatorItemBlock>
          <InfoBox>
            {summonerInfo.spell1Id}
            <h2>{summonerInfo.summonerName}</h2>
            <div className="spell-box">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/${
                  spellSearchBox(data.data, summonerInfo.spell1Id)[0].id
                }.png`}
                alt="icon"
              />
            </div>
          </InfoBox>
        </SpectatorItemBlock>
      )}
    </>
  );
};

export default SpectatorItem;
