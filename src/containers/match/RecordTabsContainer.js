import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecordTabs from '../../components/match/RecordTabs';
import { matchByPuuid, matchByClear } from '../../modules/match';

const RecordContainer = () => {
  const dispatch = useDispatch();

  const [recordActive, setRecordActive] = useState(0);

  const { summoner, loading } = useSelector(({ summoner, loading, match }) => ({
    summoner: summoner.summoner,
    loading: loading['match/MATCH_BY_PUUID'],
    matchIdList: match.matchIdList,
    matchByMatchIdList: match.matchByMatchIdList,
  }));
  const onClickRecordTab = useCallback(
    (idx, queue, type) => {
      setRecordActive(idx);
      // dispatch(matchByClear());
      dispatch(matchByPuuid(summoner.puuid, queue, type));
    },
    [summoner.puuid],
  );

  useEffect(() => {
    if (!summoner.puuid) return;

    dispatch(matchByPuuid(summoner.puuid));

    return () => {
      dispatch(matchByClear());
    };
  }, []);

  if (!summoner) return null;

  if (loading) return null;

  return (
    <RecordTabs
      recordActive={recordActive}
      onClickRecordTab={onClickRecordTab}
    />
  );
};

export default RecordContainer;
