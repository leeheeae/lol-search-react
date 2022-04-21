import React from 'react';
import Header from '../components/common/Header';
import Response from '../components/common/Response';
import MainSearchTemplet from '../components/main/MainSearchTemplet';
import SearchContainer from '../containers/summoner/SearchContainer';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainSearchTemplet>
        <Response>
          <SearchContainer big={true} />
        </Response>
      </MainSearchTemplet>
    </>
  );
};

export default MainPage;
