import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

import App from '../src';

it('renders correctly', () => {
  renderer.create(<App />);
});
