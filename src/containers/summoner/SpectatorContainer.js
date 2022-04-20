import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spectator from '../../components/search/Spectator';
import SpectatorItem from '../../components/search/SpectatorItem';

const SpectatorContainer = () => {
  const [error, setError] = useState(null);
  const { summonerSpectatorError } = useSelector(({ summoner }) => ({
    summonerSpectatorError: summoner.error.summonerSpectatorError,
  }));

  useEffect(() => {
    if (summonerSpectatorError) {
      setError('게임중이 아닙니다.');
    }
  }, [summonerSpectatorError]);

  return (
    <Spectator>
      {error}
      <SpectatorItem />
    </Spectator>
  );
};

export default SpectatorContainer;
