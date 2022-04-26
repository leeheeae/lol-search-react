import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { champSearch } from '../../modules/champ';
import { spellSearch } from '../../modules/spell';
import Spectator from '../../components/search/Spectator';

const SpectatorContainer = ({ infoView }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const {
    summonerSpectatorError,
    summonerSpectator,
    champList,
    spellInfo,
    loading,
  } = useSelector(({ summoner, champ, spell, loading }) => ({
    summonerSpectatorError: summoner.error.summonerSpectatorError,
    summonerSpectator: summoner.summonerSpectator,
    champList: champ.champList.data,
    spellInfo: spell.spellInfo,
    loading: loading['summoner/SUMMONER_SPECTATOR_SEARCH'],
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
  }, [dispatch, summonerSpectator]);

  if (!summonerSpectator || !champList) {
    return null;
  }

  if (loading) {
    return null;
  }

  return (
    <Spectator
      error={error}
      summonerSpectator={summonerSpectator}
      champList={champList}
      spellInfo={spellInfo}
      infoView={infoView}
    />
  );
};

export default SpectatorContainer;
