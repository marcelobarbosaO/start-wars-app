import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider as Provider } from 'styled-components';

import Home from '../../src/scenes/Home';
import theme from '../../src/themes';

it('renders correctly', () => {
  renderer.create(
    <Provider theme={theme}>
      <Home theme={theme} />
    </Provider>,
  );
});
