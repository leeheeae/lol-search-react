import React from 'react';
import Header from '../components/common/Header';
import Response from '../components/common/Response';
import FreeChamp from '../components/champions/ChampInfo';

const ChampPage = () => {
  return (
    <>
      <Header />
      <Response></Response>
      <FreeChamp />
    </>
  );
};

export default ChampPage;
