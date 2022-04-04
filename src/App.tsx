import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Dashboard from './Pages/Dashboard';


const App: React.FC = () => {
  return (
    <Router>
        <Dashboard />
      <GlobalStyle />
    </Router>
  );
};

export default App;
