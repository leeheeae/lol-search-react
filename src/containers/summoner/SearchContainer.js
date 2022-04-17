import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';
import {
  changeField,
  summonerSearch,
  summonerProfileIcon,
} from '../../modules/summoner';

const SearchContainer = () => {
  const dispatch = useDispatch();

  const { summoner, summonerInput, loading } = useSelector(
    ({ summoner, loading }) => ({
      summoner: summoner.summoner,
      summonerInput: summoner.summonerInput,
      loading: loading['summoner/SUMMONER_SEARCH'],
    })
  );

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(changeField({ value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(summonerSearch(summonerInput));
  };

  useEffect(() => {
    if (summoner) {
      dispatch(summonerProfileIcon(summoner.profileIconId));
    }
  }, [dispatch, summoner]);

  return <Search onChange={onChange} onSubmit={onSubmit} summoner={summoner} />;
};

export default SearchContainer;
