import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

import Loading from '../../src/components/Loading';

it('renders correctly', () => {
  renderer.create(<Loading />);
});
