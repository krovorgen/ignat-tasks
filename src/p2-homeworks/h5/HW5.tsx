import React from 'react';
import Header from './Header';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

function HW5() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default HW5;
