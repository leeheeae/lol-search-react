import React from 'react';
import Header from '../components/common/Header';
import Response from '../components/common/Response';
import ChampListContainer from '../containers/champions/ChampListContainer';
// import FreeChamp from '../components/champions/ChampInfo';

const ChampPage = () => {
  return (
    <>
      <Header />
      <Response>
        <ChampListContainer />
      </Response>
    </>
  );
};

export default ChampPage;
