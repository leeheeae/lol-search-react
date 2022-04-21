import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { champSearch } from '../../modules/champ';
import Spectator from '../../components/search/Spectator';

const SpectatorContainer = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { summonerSpectatorError, summonerSpectator, champInfo } = useSelector(
    ({ summoner, champ }) => ({
      summonerSpectatorError: summoner.error.summonerSpectatorError,
      summonerSpectator: summoner.summonerSpectator,
      champInfo: champ.champInfo,
    }),
  );

  useEffect(() => {
    if (summonerSpectatorError) {
      setError('게임중이 아닙니다.');
    } else {
      setError(null);
    }
  }, [summonerSpectatorError]);

  useEffect(() => {
    dispatch(champSearch());
  }, [summonerSpectator]);

  return (
    <Spectator
      error={error}
      summonerSpectator={summonerSpectator}
      champInfo={champInfo}
    />
  );
};

export default SpectatorContainer;
