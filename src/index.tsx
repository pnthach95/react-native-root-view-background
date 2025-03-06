import RootViewBackground from './NativeRootViewBackground';
import { colord } from 'colord';

export function setRootViewBackgroundColor(color: string) {
  const parsedColor = colord(color);
  RootViewBackground.setBackground(
    parsedColor.toRgb().r,
    parsedColor.toRgb().g,
    parsedColor.toRgb().b,
    255
  );
}
