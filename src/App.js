import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import NotFountPage from './pages/NotFountPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>LOL Search</title>
      </Helmet>
      <Routes>
        <Route path='/' element={<MainPage />} />

        {/* NotFound */}
        <Route path='*' element={<NotFountPage />} />
      </Routes>
    </>
  );
};

export default App;
