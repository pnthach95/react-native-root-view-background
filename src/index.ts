import { NativeModules, Platform } from 'react-native';
import tinycolor from 'tinycolor2';

function setRootViewBackgroundColor(color: string) {
  const parsedColor = tinycolor(color);
  if (Platform.OS === 'ios') {
    NativeModules.ReactNativeRootViewBackground.setBackground(
      parsedColor.toRgb().r,
      parsedColor.toRgb().g,
      parsedColor.toRgb().b,
      1,
    );
  } else {
    NativeModules.ReactNativeRootViewBackground.setBackground(
      parsedColor.toHexString(),
    );
  }
}

export { setRootViewBackgroundColor };
