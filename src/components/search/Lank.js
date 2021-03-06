import React from 'react';
import styled from 'styled-components';
import { lankNameConfig } from '../../lib/conifg';

const LankBlock = styled.div`
  padding: 20px;
  width: 340px;
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
    margin: 14px 0 5px;
    font-size: 16px;
    font-weight: 600;
    color: #f56d91;
  }
  .league-points {
    font-size: 14px;
  }
  .winning-rate {
    margin-top: 18px;
  }
`;

const Lank = ({ reague }) => {
  const capitalizeString = (item) => {
    const lowerItem = item.toLowerCase();
    const result = lowerItem[0].toUpperCase() + lowerItem.slice(1);
    return result;
  };

  return (
    <>
      {reague ? (
        <LankBlock>
          {reague.tier && (
            <ImgBox>
              <img
                src={`${
                  process.env.PUBLIC_URL
                }/images/ranked-emblems/Emblem_${capitalizeString(
                  reague.tier,
                )}.png`}
                alt="dd"
              />
            </ImgBox>
          )}
          <InfoBox>
            <h3 className="queue-type">{lankNameConfig[reague.queueType]}</h3>
            <div className="tier">
              {reague.tier} {reague.rank}
            </div>
            <div className="league-points">
              리그 포인트 : {reague.leaguePoints}
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
