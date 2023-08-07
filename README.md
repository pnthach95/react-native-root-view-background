# React Native Root View Background

Original: https://github.com/johniak/react-native-root-view-background

Remake to support React Native latest version.

Set background color of root view to fix white flash when using dark theme and navigating with React Navigation. Read more in `example`.

## After

<p align="center" >
    <img alt="react-native-gifted-chat" src="https://media.giphy.com/media/3o7WIq8RMAQB92cUSI/giphy.gif" width="480" height="484" />
</p>

## Before

<p align="center" >
    <img alt="react-native-gifted-chat" src="https://media.giphy.com/media/l4pT7TwVEaawBxBzG/giphy.gif" width="480" height="484" />
</p>

## Installation

`npm i @pnthach95/react-native-root-view-background --save`

or

`yarn add @pnthach95/react-native-root-view-background`

## Usage

```js
import { setRootViewBackgroundColor } from '@pnthach95/react-native-root-view-background';

const Main = () => {
  useEffect(() => {
    setRootViewBackgroundColor('#ccc');
  }, []);
}
```

## For Expo users:

They have [SystemUI](https://docs.expo.dev/versions/latest/sdk/system-ui/) which is similar to this package

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
