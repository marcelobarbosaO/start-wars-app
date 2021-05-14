import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Item from './Item';
import EmptyContent from '~/components/EmptyContent';
import Loading from '~/components/Loading';

import { fetchPeople } from '~/services/api';
import { showAlert, windowWidth } from '~/utils/helpers';

import {
  Container,
  Background,
  Logo,
  Title,
  Text,
  TextPage,
  Pagination,
  LeftContent,
  CenterContent,
  Button,
  RightContent,
} from './styles';

const space = require('~/assets/espaco.png');
const logo = require('~/assets/logo.png');
const ITENS_PER_PAGE = 10;

type ItemProps = {
  item: People;
  index: number;
};

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [people, setPeople] = useState<People[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const getPeople = async (pageNumber: number) => {
    setLoading(true);

    if (page > 1) {
      setPeople([]);
    }

    const response = await fetchPeople(pageNumber);

    setLoading(false);

    if (response.status === 200) {
      setTotalPages(Math.round(response.data.count / ITENS_PER_PAGE));

      return setPeople(response.data.results);
    }

    showAlert(response.data?.message);
  };

  const renderItem = ({ item }: ItemProps | any) => <Item person={item} />;

  const prevPage = () => {
    const newPage = page - 1;

    setPage(newPage);
  };

  const nextPage = () => {
    const newPage = page + 1;

    setPage(newPage);
  };

  const renderPeople = () => {
    if (loading) {
      return <Loading />;
    }

    if (people.length > 0) {
      return (
        <>
          <Carousel
            data={people}
            renderItem={renderItem}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
          <Pagination>
            <LeftContent>
              {page > 1 && (
                <Button onPress={() => prevPage()}>
                  <Text>prev</Text>
                </Button>
              )}
            </LeftContent>
            <CenterContent>
              <TextPage>{page}</TextPage>
            </CenterContent>
            <RightContent>
              {page < totalPages && (
                <Button onPress={() => nextPage()}>
                  <Text>next</Text>
                </Button>
              )}
            </RightContent>
          </Pagination>
        </>
      );
    }

    return <EmptyContent text="Nenhum registro encontrado..." />;
  };

  useEffect(() => {
    getPeople(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Background source={space} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <Container>
        <Logo source={logo} resizeMode="contain" />
        <Title>Characters</Title>
        {renderPeople()}
      </Container>
    </Background>
  );
};

export default Home;
