import { Alert } from 'react-native';

import { showAlert, isIOS, isAndroid, windowWidth } from '../../src/utils/helpers';

test('should be showAlert is called show Alert', () => {
  jest.spyOn(Alert, 'alert');

  showAlert('teste');

  expect(Alert.alert).toHaveBeenCalled();
});

test('should be isIOS true', () => {
  expect(isIOS).toBeTruthy();
});

test('should be isAndroid is false', () => {
  expect(isAndroid).toBeFalsy();
});

test('should be windowWidth is 100', () => {
  expect(windowWidth).toBe(100);
});
