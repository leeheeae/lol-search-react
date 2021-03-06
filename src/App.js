import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Background from './components/common/Background';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import ChampPage from './pages/ChampPage';
import ChampInfoPage from './pages/ChampInfoPage';
import NotFountPage from './pages/NotFountPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>LOL Search</title>
      </Helmet>
      <Background>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search/:nickname" element={<SearchPage />} />
          <Route path="/champ" element={<ChampPage />} />
          <Route path="/champ/:name" element={<ChampInfoPage />} />

          {/* NotFound */}
          <Route path="*" element={<NotFountPage />} />
        </Routes>
      </Background>
    </>
  );
};

export default App;
