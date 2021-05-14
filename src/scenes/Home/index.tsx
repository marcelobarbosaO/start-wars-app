import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Item from './Item';

import { fetchPeople } from '~/services/api';
import { showAlert, windowWidth } from '~/utils/helpers';

import {
  Container,
  Background,
  Logo,
  Title,
  Text,
  Pagination,
  LeftContent,
  Button,
  RightContent,
} from './styles';

const espaco = require('~/assets/espaco.png');
const logo = require('~/assets/logo.png');

type ItemProps = {
  item: People;
  index: number;
};

const Home = () => {
  const [people, setPeople] = useState<People[]>([]);

  const getPeople = async () => {
    const response = await fetchPeople();

    if (response.status === 200) {
      return setPeople(response.data.results);
    }

    setPeople([]);
    showAlert(response.data?.message);
  };

  const renderItem = ({ item }: ItemProps | any) => <Item person={item} />;

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Background source={espaco} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <Container>
        <Logo source={logo} resizeMode="contain" />
        <Title>Personagens</Title>
        {people.length > 0 && (
          <Carousel
            data={people}
            renderItem={renderItem}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        )}
        <Pagination>
          <LeftContent>
            <Button>
              <Text>anterior</Text>
            </Button>
          </LeftContent>
          <RightContent>
            <Button>
              <Text>próximo</Text>
            </Button>
          </RightContent>
        </Pagination>
      </Container>
    </Background>
  );
};

export default Home;
