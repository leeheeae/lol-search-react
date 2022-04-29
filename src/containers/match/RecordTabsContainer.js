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
      dispatch(matchByClear());

      if (idx === 0) {
        //전체
        dispatch(matchByPuuid(summoner.puuid, queue, type));
      }

      if (idx === 1) {
        //솔로랭크
        dispatch(matchByPuuid(summoner.puuid, 420, 'ranked'));
      }

      if (idx === 2) {
        //자유랭크
        dispatch(matchByPuuid(summoner.puuid, 440, 'ranked'));
      }

      if (idx === 3) {
        //일반 - 소환사의협곡
        dispatch(matchByPuuid(summoner.puuid, 420, 'normal'));
      }

      if (idx === 4) {
        //무작위 총력전
        dispatch(matchByPuuid(summoner.puuid, 450, 'normal'));
      }
    },
    [dispatch, summoner.puuid],
  );

  useEffect(() => {
    if (!summoner.puuid) return;

    setRecordActive(0);
    dispatch(matchByPuuid(summoner.puuid));

    return () => {
      dispatch(matchByClear());
    };
  }, [dispatch, summoner.puuid]);

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
