import React from 'react';
import { Container, Detail, Title, Image, ImageView } from './styles';
import { Actions } from 'react-native-router-flux';

type ItemProps = {
  person: People;
};

const image: string =
  'https://www.pinclipart.com/picdir/big/559-5593100_transparent-star-wars-clip-art-chewbacca-star-wars.png';

const Item = ({ person }: ItemProps) => {
  return (
    <Container testID={`person-card-${person.name}`} onPress={() => Actions.person({ person })}>
      <ImageView>
        <Image source={{ uri: image, width: 180, height: 180 }} resizeMode="contain" />
      </ImageView>
      <Detail>
        <Title>{person.name}</Title>
      </Detail>
    </Container>
  );
};

export default Item;
