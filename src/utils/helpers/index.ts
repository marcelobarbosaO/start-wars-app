import { Alert, Platform, Dimensions } from 'react-native';

export const showAlert = (text: string, buttons?: []) =>
  Alert.alert('StarWars Warning', text, buttons);

export const isIOS = Platform.OS === 'ios';

export const isAndroid = !isIOS;

export const windowWidth = Dimensions.get('window').width;
