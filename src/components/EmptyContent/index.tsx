import React from 'react';
import { Text } from './styles';

type EmptyContentProps = {
  text: string;
};

const EmptyContent = ({ text }: EmptyContentProps) => <Text>{text}</Text>;

export default EmptyContent;
