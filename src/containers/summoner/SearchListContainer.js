import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchList from '../../components/search/SearchList';
import {
  summonerSearch,
  summonerReague,
  summonerReagueClear,
} from '../../modules/summoner';
import { summonerSpectatorSearch } from '../../modules/summoner';

const SearchListContainer = ({ setInfoView }) => {
  const dispatch = useDispatch();
  let params = useParams();

  const { summoner, loading } = useSelector(({ summoner, loading }) => ({
    summoner: summoner.summoner,
    loading: loading['summoner/SUMMONER_SEARCH'],
  }));

  const onClickSpectator = () => {
    dispatch(summonerSpectatorSearch(summoner.id));
    setInfoView(true);
  };

  useEffect(() => {
    if (!params.nickname) return;
    const nickname =
      params.nickname.length <= 2
        ? params.nickname.split('').join(' ')
        : params.nickname;

    setInfoView(false);
    dispatch(summonerSearch(nickname));
  }, [dispatch, setInfoView, params.nickname]);

  useEffect(() => {
    if (!summoner.id) return;
    dispatch(summonerReague(summoner.id));

    return () => {
      dispatch(summonerReagueClear());
    };
  }, [dispatch, summoner.id]);

  if (loading) return null;

  if (!summoner) return null;

  return <SearchList summoner={summoner} onClickSpectator={onClickSpectator} />;
};

export default SearchListContainer;
