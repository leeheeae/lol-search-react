import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';
// import SearchList from '../../components/search/SearchList';
import {
  changeField,
  summonerSearch,
  summonerProfileIcon,
} from '../../modules/summoner';

const SearchContainer = () => {
  const dispatch = useDispatch();

  const { summoner, summonerInput, summonerIcon } = useSelector(
    ({ summoner }) => ({
      summoner: summoner.summoner,
      summonerInput: summoner.summonerInput,
      summonerIcon: summoner.summonerIcon,
    }),
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
      console.log(summoner);
      dispatch(summonerProfileIcon(summoner.profileIconId));
    }
  }, [summoner]);

  return (
    <Search
      onChange={onChange}
      onSubmit={onSubmit}
      summoner={summoner}
      summonerIcon={summonerIcon}
    />
  );
};

export default SearchContainer;
