import React from 'react';
import styled from 'styled-components';
import { IoMdSwitch } from 'react-icons/io';
import Response from '../common/Response';

const SummonerInfoBox = styled.div`
  padding: 40px 20px;
  display: flex;
  align-items: flex-start;
`;

const IconBox = styled.div`
  width: 120px;
  height: 120px;
  position: relative;

  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 10px);
    background-color: #fff;
    border: 3px solid #8d8daa;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 14px;
    font-weight: 600;
    color: #8d8daa;
  }
`;

const InfoBox = styled.div`
  padding: 1.2rem;
  .summoner_name {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const WatchingBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 12px 18px;
  border-radius: 3px;
  background: #797991;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    background: #59596b;
  }
  svg {
    margin-left: 8px;
  }
`;

const SearchList = ({ summoner, onClickSpectator }) => {
  return (
    <>
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
          <WatchingBtn onClick={() => onClickSpectator()}>
            인게임정보 확인하기 <IoMdSwitch size="24px" />
          </WatchingBtn>
        </InfoBox>
      </SummonerInfoBox>
    </>
  );
};

export default SearchList;
