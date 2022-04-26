import React, { useState } from 'react';
import Header from '../components/common/Header';
import SearchListContainer from '../containers/summoner/SearchListContainer';
import LankContainer from '../containers/summoner/LankContainer';
import SpectatorContainer from '../containers/summoner/SpectatorContainer';

const SearchPage = () => {
  const [infoView, setInfoView] = useState(false);

  return (
    <>
      <Header />
      <SearchListContainer setInfoView={setInfoView} />
      <LankContainer />
      <SpectatorContainer infoView={infoView} />
    </>
  );
};

export default SearchPage;
