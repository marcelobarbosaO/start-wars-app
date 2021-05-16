import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

import EmptyContent from '../../src/components/EmptyContent';

it('renders correctly', () => {
  renderer.create(<EmptyContent text="teste" />);
});
