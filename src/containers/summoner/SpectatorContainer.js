import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spectator from '../../components/search/Spectator';

const SpectatorContainer = () => {
  const [error, setError] = useState(null);
  const { summonerSpectatorError, summonerSpectator } = useSelector(
    ({ summoner }) => ({
      summonerSpectatorError: summoner.error.summonerSpectatorError,
      summonerSpectator: summoner.summonerSpectator,
    }),
  );

  useEffect(() => {
    if (summonerSpectatorError) {
      setError('게임중이 아닙니다.');
    } else {
      setError(null);
    }
  }, [summonerSpectatorError]);

  return <Spectator error={error} summonerSpectator={summonerSpectator} />;
};

export default SpectatorContainer;
