import { NativeModules, Platform } from 'react-native';

function hexToRgb(hex: string) {
  let c: string[];
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    const nc = `0x${c.join('')}`;
    const red = parseFloat(`${(Number(nc) >> 16) & 255}`);
    const green = parseFloat(`${(Number(nc) >> 8) & 255}`);
    const blue = parseFloat(`${Number(nc) & 255}`);
    return [red, green, blue];
  }
  throw new Error('Bad Hex');
}

function setRootViewBackgroundColorWithRGB(
  r: number,
  g: number,
  b: number,
  a: number,
) {
  NativeModules.RNRootViewBackground.setBackground(r, g, b, a);
}

function setRootViewBackgroundColor(hex: string) {
  if (Platform.OS === 'ios') {
    const [r, g, b] = hexToRgb(hex);
    setRootViewBackgroundColorWithRGB(r, g, b, 1);
  } else {
    if (hex.length === 4) {
      hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
    NativeModules.RNRootViewBackground.setBackground(hex);
  }
}

export { setRootViewBackgroundColor };
