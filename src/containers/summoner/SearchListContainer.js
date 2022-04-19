import React from 'react';
import { useSelector } from 'react-redux';
import SearchList from '../../components/search/SearchList';

const SearchListContainer = () => {
  const { summoner } = useSelector(({ summoner }) => ({
    summoner: summoner.summoner,
  }));

  return <SearchList summoner={summoner} />;
};

export default SearchListContainer;
