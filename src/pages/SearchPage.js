import React from 'react';
import Header from '../components/common/Header';
import SearchListContainer from '../containers/summoner/SearchListContainer';
import LankContainer from '../containers/summoner/LankContainer';
import SpectatorContainer from '../containers/summoner/SpectatorContainer';

const SearchPage = () => {
  return (
    <>
      <Header />
      <SearchListContainer />
      <LankContainer />
      <SpectatorContainer />
    </>
  );
};

export default SearchPage;
