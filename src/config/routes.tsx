import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from '~/scenes/Home';
import Person from '~/scenes/Person';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene initial key="home" component={Home} hideNavBar />
        <Scene key="person" component={Person} hideNavBar />
      </Stack>
    </Router>
  );
};

export default Routes;
