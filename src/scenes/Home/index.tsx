import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StatusBar, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Item from './Item';

import { fetchPeople } from '~/services/api';
import { showAlert } from '~/utils/helpers';

import {
  Container,
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

const sliderWidth = Dimensions.get('window').width;

type ItemProps = {
  item: People;
  index: number;
};

const Home = () => {
  const carousel = useRef(null);
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
    <ImageBackground source={espaco} style={{ flex: 1 }} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <Container>
        <Logo source={logo} resizeMode="contain" />
        <Title>Personagens</Title>
        {people.length > 0 && (
          // <List
          //   data={people}
          //   keyExtractor={(item: People | any) => item.name}
          //   renderItem={renderItem}
          // />
          <Carousel
            ref={carousel}
            data={people}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
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
    </ImageBackground>
  );
};

export default Home;
