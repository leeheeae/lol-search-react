import React from 'react';
import Header from '../components/common/Header';
import SearchListContainer from '../containers/summoner/SearchListContainer';
import LankContainer from '../containers/summoner/LankContainer';

const SearchPage = () => {
  return (
    <>
      <Header />
      <SearchListContainer />
      <LankContainer />
    </>
  );
};

export default SearchPage;
