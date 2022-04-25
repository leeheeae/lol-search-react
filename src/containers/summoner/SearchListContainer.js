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

const SearchListContainer = () => {
  const dispatch = useDispatch();
  let params = useParams();

  const { summoner } = useSelector(({ summoner }) => ({
    summoner: summoner.summoner,
  }));

  useEffect(() => {
    const nickname =
      params.nickname.length <= 2
        ? params.nickname.split('').join(' ')
        : params.nickname;

    dispatch(summonerSearch(nickname));
  }, [params.nickname]);

  useEffect(() => {
    if (!summoner) return;
    dispatch(summonerReague(summoner.id));

    return () => {
      dispatch(summonerReagueClear());
    };
  }, [summoner]);

  const onClickSpectator = () => {
    dispatch(summonerSpectatorSearch(summoner.id));
  };

  return <SearchList summoner={summoner} onClickSpectator={onClickSpectator} />;
};

export default SearchListContainer;
