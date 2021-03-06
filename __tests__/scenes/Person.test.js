import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider as Provider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react-native';

import Person from '../../src/scenes/Person';
import theme from '../../src/themes';

const personData = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/6/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/7/',
  ],
  species: ['https://swapi.dev/api/species/1/'],
  vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
  starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
};

it('renders correctly', () => {
  renderer.create(
    <Provider theme={theme}>
      <Person theme={theme} person={personData} />
    </Provider>,
  );
});

it('should be click to back home', () => {
  const { getByTestId } = render(<Person theme={theme} person={personData} />);

  const element = getByTestId('back-to-home');

  fireEvent.press(element);
});
