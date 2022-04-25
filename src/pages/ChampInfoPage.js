import React from 'react';
import Header from '../components/common/Header';
import Response from '../components/common/Response';
import ChampInfoContainer from '../containers/champions/ChampInfoContainer';

const ChampInfoPage = () => {
  return (
    <>
      <Header />
      <Response>
        <ChampInfoContainer />
      </Response>
    </>
  );
};

export default ChampInfoPage;
