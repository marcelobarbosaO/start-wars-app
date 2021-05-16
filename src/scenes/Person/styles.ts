import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 80px;
  align-self: center;
`;

export const Row = styled.Text`
  flex-direction: row;
  margin-top: 15px;
`;

export const Option = styled.Text`
  font-size: 18px;
  margin-right: 20px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 18px;
`;

export const Name = styled.Text`
  font-family: 'Star Jedi';
  color: #000;
  font-size: 20px;
  letter-spacing: 2px;
  align-self: center;
`;

export const Content = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  margin-horizontal: 20px;
`;

export const ImageView = styled.View`
  width: 180px;
  height: 100px;
  align-items: center;
  align-self: center;
  margin-vertical: 10px;
`;
export const Image = styled.Image``;

export const Button = styled.TouchableOpacity`
  background: #fff;
  border-radius: 10px;
  padding: 12px 20px;
  margin-horizontal: 20px;
  margin-top: 20px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Star Jedi';
  color: #f90;
  font-size: 13px;
  letter-spacing: 2px;
`;
