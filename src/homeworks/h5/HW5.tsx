import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Routes } from './Routes';

export const HW5 = () => {
  return (
    <HashRouter>
      <Header />
      <Routes />
    </HashRouter>
  );
};
