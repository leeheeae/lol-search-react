import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchList from '../../components/search/SearchList';
import { summonerSpectatorSearch } from '../../modules/summoner';

const SearchListContainer = () => {
  const dispatch = useDispatch();
  const { summoner } = useSelector(({ summoner }) => ({
    summoner: summoner.summoner,
  }));

  const onClickSpectator = () => {
    dispatch(summonerSpectatorSearch(summoner.id));
  };

  return <SearchList summoner={summoner} onClickSpectator={onClickSpectator} />;
};

export default SearchListContainer;
