import React from 'react';
import { StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Container,
  Background,
  Logo,
  Name,
  Content,
  ImageView,
  Image,
  Row,
  Option,
  Text,
  ButtonText,
  Button,
} from './styles';

const space = require('~/assets/espaco.png');
const logo = require('~/assets/logo.png');
const image: string =
  'https://www.pinclipart.com/picdir/big/559-5593100_transparent-star-wars-clip-art-chewbacca-star-wars.png';

type PersonProps = {
  person: People;
};

const Person = ({ person }: PersonProps) => {
  return (
    <Background source={space} resizeMode="cover">
      <StatusBar barStyle="light-content" />
      <Container>
        <Logo source={logo} resizeMode="contain" />
        <ImageView>
          <Image source={{ uri: image, width: 100, height: 100 }} resizeMode="contain" />
        </ImageView>
        <Content>
          <Name>{person.name}</Name>

          <Row>
            <Option>Birth Year: </Option>
            <Text>{person.birth_year}</Text>
          </Row>

          <Row>
            <Option>Height: </Option>
            <Text>{person.height}</Text>
          </Row>

          <Row>
            <Option>Mass: </Option>
            <Text>{person.mass}</Text>
          </Row>

          <Row>
            <Option>Skin Color: </Option>
            <Text>{person.skin_color}</Text>
          </Row>

          <Row>
            <Option>Eye Color: </Option>
            <Text>{person.eye_color}</Text>
          </Row>

          <Row>
            <Option>Gender: </Option>
            <Text>{person.gender}</Text>
          </Row>
        </Content>
        <Button onPress={() => Actions.pop()}>
          <ButtonText>back</ButtonText>
        </Button>
      </Container>
    </Background>
  );
};

export default Person;
