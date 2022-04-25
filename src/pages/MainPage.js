import React from 'react';
import Header from '../components/common/Header';
import Response from '../components/common/Response';
import MainSearchTemplat from '../components/main/MainSearchTemplat';
import SearchContainer from '../containers/summoner/SearchContainer';
import LotationsTemplat from '../components/champions/LotationsTemplat';
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
        <LotationsTemplat marginTop={'5rem'}>
          <LotationsContainer />
        </LotationsTemplat>
      </Response>
    </>
  );
};

export default MainPage;
