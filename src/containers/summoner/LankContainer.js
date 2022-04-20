import React from 'react';
import { useSelector } from 'react-redux';
import Lank from '../../components/search/Lank';

const LankContainer = () => {
  const { summonerReague } = useSelector(({ summoner }) => ({
    summonerReague: summoner.summonerReague,
  }));

  return <Lank reague={summonerReague[0]} />;
};

export default LankContainer;
