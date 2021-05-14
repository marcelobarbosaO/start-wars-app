import { Alert, Platform } from 'react-native';

export const showAlert = (text: string, buttons?: []) =>
  Alert.alert('StarWars Warning', text, buttons);

export const isIOS = Platform.OS === 'ios';

export const isAndroid = !isIOS;
