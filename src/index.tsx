import React from 'react';

import AppProvider from './context';
import Routes from '~/config/routes';

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
