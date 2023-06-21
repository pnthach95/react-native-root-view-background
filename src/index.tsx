import { NativeModules, Platform } from 'react-native';
import { colord } from 'colord';

function setRootViewBackgroundColor(color: string) {
  const parsedColor = colord(color);
  if (Platform.OS === 'ios') {
    NativeModules.RootViewBackground.setBackground(
      parsedColor.toRgb().r,
      parsedColor.toRgb().g,
      parsedColor.toRgb().b,
      1
    );
  } else {
    NativeModules.RootViewBackground.setBackground(parsedColor.toHex());
  }
}

export { setRootViewBackgroundColor };
