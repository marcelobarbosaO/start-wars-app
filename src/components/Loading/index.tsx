import React from 'react';
import LottieView from 'lottie-react-native';

import { Container, Content } from './styles';

const Loading = () => (
  <Container>
    <Content>
      <LottieView source={require('~/assets/loading.json')} autoPlay loop />
    </Content>
  </Container>
);

export default Loading;
