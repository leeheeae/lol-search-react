import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Record from '../../components/match/Record';
import { matchByPuuid } from '../../modules/match';
import { gameType } from '../../lib/conifg';

const RecordContainer = () => {
  const dispatch = useDispatch();

  const [recordActive, setRecordActive] = useState(0);

  const { summoner, loading } = useSelector(({ summoner, loading }) => ({
    summoner: summoner.summoner,
    loading: loading['match/MATCH_BY_PUUID'],
  }));

  const onClickRecordTab = (idx, queue, type) => {
    setRecordActive(idx);
    dispatch(matchByPuuid(summoner.puuid, queue, type));
  };

  useEffect(() => {
    if (!summoner.puuid) return;

    dispatch(matchByPuuid(summoner.puuid, 450, gameType[2]));
  }, [dispatch, summoner.puuid, recordActive]);

  if (!summoner) return null;

  if (loading) return null;

  return (
    <Record recordActive={recordActive} onClickRecordTab={onClickRecordTab} />
  );
};

export default RecordContainer;
