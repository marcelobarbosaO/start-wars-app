import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import Routes from '~/config/routes';
import theme from './themes';

const App = () => {
  return (
    <Provider theme={theme}>
      <Routes />
    </Provider>
  );
};

export default App;
