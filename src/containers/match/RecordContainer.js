import React, { useEffect } from 'react';
import Record from '../../components/match/Record';
import { useDispatch, useSelector } from 'react-redux';
import { matchByMatchId, matchByClear } from '../../modules/match';
import { champInfoSearch } from '../../modules/champ';
import { spellSearch } from '../../modules/spell';

const RecordContainer = () => {
  const dispatch = useDispatch();

  const {
    matchIdList,
    matchByMatchIdList,
    summoner,
    champInfo,
    spellInfo,
    loading,
  } = useSelector(({ match, summoner, champ, spell, loading }) => ({
    matchIdList: match.matchIdList,
    matchByMatchIdList: match.matchByMatchIdList,
    summoner: summoner.summoner.name,
    champInfo: champ.champInfo.data,
    spellInfo: spell.spellInfo,
    loading: loading['match/MATCH_BY_MATCH_ID'],
  }));

  useEffect(() => {
    if (!matchIdList) return;

    dispatch(matchByMatchId(matchIdList));
    dispatch(champInfoSearch());
    dispatch(spellSearch());

    return () => {
      dispatch(matchByClear());
    };
  }, [dispatch, matchIdList]);

  if (
    !matchIdList ||
    !matchByMatchIdList ||
    !summoner ||
    !champInfo ||
    !spellInfo
  )
    return null;

  if (loading) return null;

  return (
    <Record
      matchByMatchIdList={matchByMatchIdList}
      summoner={summoner}
      champInfo={champInfo}
      spellInfo={spellInfo}
    />
  );
};

export default RecordContainer;
