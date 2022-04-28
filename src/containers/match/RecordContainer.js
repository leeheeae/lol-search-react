import React, { useEffect } from 'react';
import Record from '../../components/match/Record';
import { useDispatch, useSelector } from 'react-redux';
import { matchByMatchId } from '../../modules/match';
// import { matchByMatchId } from '../../lib/api/match';

const RecordContainer = () => {
  const dispatch = useDispatch();

  const { matchIdList, loading } = useSelector(({ match, loading }) => ({
    matchIdList: match.matchIdList,
    loading: loading['match/MATCH_BY_PUUID'],
  }));

  useEffect(() => {
    if (!matchIdList) return;

    // matchByMatchId(matchIdList);
    dispatch(matchByMatchId(matchIdList));
  }, [dispatch, matchIdList]);

  if (!matchIdList) return null;

  if (loading) return null;

  return <Record />;
};

export default RecordContainer;
