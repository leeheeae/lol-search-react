import React from 'react';
import Header from '../components/common/Header';
import Response from '../components/common/Response';
import MainSearchTemplat from '../components/main/MainSearchTemplat';
import SearchContainer from '../containers/summoner/SearchContainer';
import LotationsContainer from '../containers/champions/LotationsContainer';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainSearchTemplat>
        <Response>
          <SearchContainer big={true} />
        </Response>
      </MainSearchTemplat>
      <Response>
        <LotationsContainer marginTop={'5rem'} />
      </Response>
    </>
  );
};

export default MainPage;
