import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider as Provider } from 'styled-components';
import { render } from '@testing-library/react-native';

import Home from '../../src/scenes/Home';
import theme from '../../src/themes';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

describe('Test home page', () => {
  test('renders correctly', () => {
    renderer.create(
      <Provider theme={theme}>
        <Home theme={theme} />
      </Provider>,
    );
  });

  test('should be call request data', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});
  });
});
