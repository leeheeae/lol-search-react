import React from 'react';
import styled from 'styled-components';

const LankBlock = styled.div`
  padding: 20px;
  width: 300px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const ImgBox = styled.div`
  width: 100px;
  margin-right: 20px;
  img {
    width: 100%;
    display: block;
  }
`;

const InfoBox = styled.div`
  .queue-type {
    font-size: 1.1rem;
  }
  .tier {
    margin: 10px 0 20px;
    font-size: 16px;
    font-weight: 600;
    color: #f56d91;
  }
  .winning-rate {
    margin-top: 10px;
  }
`;

const Lank = ({ reague }) => {
  const lankNameList = {
    RANKED_SOLO_5x5: '솔로랭크 5X5',
    RANKED_FLEX_SR: '자유랭크 5X5',
  };

  const capitalizeString = (item) => {
    const lowerItem = item.toLowerCase();
    const result = lowerItem[0].toUpperCase() + lowerItem.slice(1);
    return result;
  };

  return (
    <>
      {reague ? (
        <LankBlock>
          <ImgBox>
            <img
              src={`images/ranked-emblems/Emblem_${capitalizeString(
                reague.tier,
              )}.png`}
              alt="dd"
            />
          </ImgBox>
          <InfoBox>
            <h3 className="queue-type">{lankNameList[reague.queueType]}</h3>
            <div className="tier">
              {reague.tier} {reague.rank} -
              <span className="league-points"> {reague.leaguePoints}</span>
            </div>
            <div className="winning-rate">
              <span>{reague.wins + reague.losses}전 </span>
              <span>{reague.wins}승 </span>
              <span>{reague.losses}패</span>
            </div>
          </InfoBox>
        </LankBlock>
      ) : (
        <></>
      )}
    </>
  );
};

export default Lank;
