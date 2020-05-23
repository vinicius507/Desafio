import React from 'react';
import './App.css';

import Routes from './routes';

import Logo from './assets/logo-ledger.png';

function App() {
  return (
    <div className="container">
      <div className="content">
        <img src={Logo} alt="LedgerTec" />
        <Routes />
        <a
          className="support"
          href="mailto:viniciusp.olivera@gmail.com?subject=APROVADO PARA PRÓXIMA FASE"
        >
          Suporte
        </a>
      </div>
    </div>
  );
}

export default App;
