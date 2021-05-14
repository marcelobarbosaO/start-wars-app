import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from '~/scenes/Home';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene initial key="home" component={Home} hideNavBar />
      </Stack>
    </Router>
  );
};

export default Routes;
