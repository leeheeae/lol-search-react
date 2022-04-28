import React, { useState } from 'react';
import Header from '../components/common/Header';
import Response from '../components/common/Response';
import SearchListContainer from '../containers/summoner/SearchListContainer';
import LankContainer from '../containers/summoner/LankContainer';
import SpectatorContainer from '../containers/summoner/SpectatorContainer';
import RecordTabsContainer from '../containers/match/RecordTabsContainer';

const SearchPage = () => {
  const [infoView, setInfoView] = useState(false);

  return (
    <>
      <Header />
      <Response>
        <SearchListContainer setInfoView={setInfoView} />
        <LankContainer />
        <SpectatorContainer infoView={infoView} />
        <RecordTabsContainer />
      </Response>
    </>
  );
};

export default SearchPage;
