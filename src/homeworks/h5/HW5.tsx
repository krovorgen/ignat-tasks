import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Routes } from './Routes';

export const HW5 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};
