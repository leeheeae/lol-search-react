import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { champSearch } from '../../modules/champ';
import { spellSearch } from '../../modules/spell';
import Spectator from '../../components/search/Spectator';

const SpectatorContainer = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { summonerSpectatorError, summonerSpectator, champInfo, spellInfo } =
    useSelector(({ summoner, champ, spell }) => ({
      summonerSpectatorError: summoner.error.summonerSpectatorError,
      summonerSpectator: summoner.summonerSpectator,
      champInfo: champ.champInfo,
      spellInfo: spell.spellInfo,
    }));

  useEffect(() => {
    if (summonerSpectatorError) {
      setError('게임중이 아닙니다.');
    } else {
      setError(null);
    }
  }, [summonerSpectatorError]);

  useEffect(() => {
    dispatch(champSearch());
    dispatch(spellSearch());
  }, [summonerSpectator]);

  return (
    <Spectator
      error={error}
      summonerSpectator={summonerSpectator}
      champInfo={champInfo}
      spellInfo={spellInfo}
    />
  );
};

export default SpectatorContainer;
