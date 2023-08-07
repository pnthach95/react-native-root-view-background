import { NativeModules, Platform } from 'react-native';
import { colord } from 'colord';

const LINKING_ERROR =
  `The package 'react-native-root-view-background' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const RootViewBackgroundModule = isTurboModuleEnabled
  ? require('./NativeRootViewBackground').default
  : NativeModules.RootViewBackground;

const RootViewBackground = RootViewBackgroundModule
  ? RootViewBackgroundModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

function setRootViewBackgroundColor(color: string) {
  const parsedColor = colord(color);
  RootViewBackground.setBackground(
    parsedColor.toRgb().r,
    parsedColor.toRgb().g,
    parsedColor.toRgb().b,
    1
  );
}

export { setRootViewBackgroundColor };
