import React from 'react';
import SearchContainer from '../containers/summoner/SearchContainer';
import Header from '../components/common/Header';
import Response from '../components/common/Response';

const MainPage = () => {
  return (
    <>
      <Header />
      <Response>
        <div>
          <h1>메인</h1>
          <SearchContainer />
        </div>
      </Response>
    </>
  );
};

export default MainPage;
