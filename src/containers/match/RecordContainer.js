import React, { useEffect } from 'react';
import Record from '../../components/match/Record';
import { useDispatch, useSelector } from 'react-redux';
import { matchByMatchId } from '../../modules/match';

const RecordContainer = () => {
  const dispatch = useDispatch();

  const { matchIdList, matchByMatchIdList, loading } = useSelector(
    ({ match, loading }) => ({
      matchIdList: match.matchIdList,
      matchByMatchIdList: match.matchByMatchIdList,
      loading: loading['match/MATCH_BY_MATCH_ID'],
    }),
  );

  useEffect(() => {
    if (!matchIdList) return;

    dispatch(matchByMatchId(matchIdList));
  }, [dispatch, matchIdList]);

  if (!matchIdList || !matchByMatchIdList) return null;

  if (loading) return null;

  return <Record matchByMatchIdList={matchByMatchIdList} />;
};

export default RecordContainer;
