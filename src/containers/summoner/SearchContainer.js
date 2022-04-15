import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';
import { changeField, summonerSearch } from '../../modules/summoner';

const SearchContainer = () => {
  const dispatch = useDispatch();

  const { summoner, summonerInput } = useSelector(({ summoner }) => ({
    summoner: summoner.summoner,
    summonerInput: summoner.summonerInput,
  }));

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(changeField({ value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(summonerSearch(summonerInput));
  };

  return <Search onChange={onChange} onSubmit={onSubmit} summoner={summoner} />;
};

export default SearchContainer;
