import React from 'react';
import styled from 'styled-components';
import Response from '../common/Response';

const SummonerInfoBox = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  margin-right: 20px;

  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  p {
    position: absolute;
    width: 44px;
    height: 24px;
    margin-left: -22px;
    left: 50%;
    bottom: -24px;
    background-color: #fff;
    text-align: center;
    border-radius: 20px;
    border: 3px solid #333;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const InfoBox = styled.div`
  .summoner_name {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const SearchList = ({ summoner }) => {
  return (
    <>
      <Response>
        {summoner !== null && (
          <SummonerInfoBox>
            <IconBox>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/profileicon/${summoner.profileIconId}.png`}
                alt="icon"
              />
              <p className="level_icon">{summoner.summonerLevel}</p>
            </IconBox>
            <InfoBox>
              <h3 className="summoner_name">{summoner.name}</h3>
            </InfoBox>
          </SummonerInfoBox>
        )}
      </Response>
    </>
  );
};

export default SearchList;
