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

export const Title = styled.Text`
  font-family: ${({ theme }: any) => theme.typography.normal};
  color: #fff;
  font-size: 23px;
  letter-spacing: 2px;
  margin-horizontal: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }: any) => theme.typography.normal};
  color: #f90;
  font-size: 12px;
  letter-spacing: 2px;
  margin-horizontal: 20px;
`;

export const Pagination = styled.View`
  flex-direction: row;
  margin-horizontal: 20px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const LeftContent = styled.View`
  align-items: flex-start;
  flex: 1;
`;

export const RightContent = styled.View`
  align-items: flex-end;
  flex: 1;
`;
