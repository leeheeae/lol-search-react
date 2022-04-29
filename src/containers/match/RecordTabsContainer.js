import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecordTabs from '../../components/match/RecordTabs';
import { matchByPuuid, matchByClear } from '../../modules/match';

const RecordContainer = () => {
  const dispatch = useDispatch();

  const [recordActive, setRecordActive] = useState(0);

  const { summoner, loading, matchIdList, matchByMatchIdList } = useSelector(
    ({ summoner, loading, match }) => ({
      summoner: summoner.summoner,
      loading: loading['match/MATCH_BY_PUUID'],
      matchIdList: match.matchIdList,
      matchByMatchIdList: match.matchByMatchIdList,
    }),
  );
  const onClickRecordTab = useCallback(
    (idx, queue, type) => {
      setRecordActive(idx);
      // dispatch(matchByClear());
      const value = {
        puuid: summoner.puuid,
        queue: queue,
        type: type,
      };
      console.log(dispatch(matchByPuuid(value)));
    },
    [recordActive, matchIdList, matchByMatchIdList],
  );

  // const onClickRecordTab = (idx, queue, type) => {
  //   setRecordActive(idx);
  //   console.log(idx, queue, type);
  //   dispatch(matchByClear());
  //   dispatch(matchByPuuid(summoner.puuid, queue, type));
  // };

  useEffect(() => {
    if (!summoner.puuid) return;

    dispatch(matchByPuuid(summoner.puuid));

    return () => {
      dispatch(matchByClear());
    };
  }, [dispatch, summoner.puuid, recordActive]);

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
