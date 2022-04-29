import React, { useEffect } from 'react';
import Record from '../../components/match/Record';
import { useDispatch, useSelector } from 'react-redux';
import { matchByMatchId } from '../../modules/match';
import data from '../../lib/conifg/data.json';

const RecordContainer = () => {
  const dispatch = useDispatch();

  const { matchIdList, matchByMatchIdList, summoner, loading } = useSelector(
    ({ match, summoner, loading }) => ({
      matchIdList: match.matchIdList,
      matchByMatchIdList: match.matchByMatchIdList,
      summoner: summoner.summoner.name,
      loading: loading['match/MATCH_BY_MATCH_ID'],
    }),
  );

  useEffect(() => {
    if (!matchIdList) return;

    dispatch(matchByMatchId(matchIdList));
  }, [dispatch, matchIdList]);

  if (!matchIdList || !matchByMatchIdList) return null;

  if (loading) return null;

  return <Record matchByMatchIdList={data} summoner={summoner} />;
};

export default RecordContainer;
