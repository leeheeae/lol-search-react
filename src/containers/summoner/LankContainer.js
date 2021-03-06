import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Lank from '../../components/search/Lank';

const LankContainerBlock = styled.div`
  display: flex;

  > div + div {
    margin-left: 10px;
  }
`;

const LankContainer = () => {
  const { summonerReague } = useSelector(({ summoner }) => ({
    summonerReague: summoner.summonerReague,
  }));

  const summonerFilter = (items) => {
    return items.filter((item) => item.queueType !== 'RANKED_TFT_PAIRS');
  };

  return (
    <LankContainerBlock>
      {summonerFilter(summonerReague).map((lank, index) => (
        <Lank reague={lank} key={index} />
      ))}
    </LankContainerBlock>
  );
};
export default LankContainer;
