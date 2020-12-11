# React Native Root View Background

Original: https://github.com/johniak/react-native-root-view-background

Remake to support React Native latest version.

## After

<p align="center" >
    <img alt="react-native-gifted-chat" src="https://media.giphy.com/media/3o7WIq8RMAQB92cUSI/giphy.gif" width="480" height="484" />
</p>

## Before

<p align="center" >
    <img alt="react-native-gifted-chat" src="https://media.giphy.com/media/l4pT7TwVEaawBxBzG/giphy.gif" width="480" height="484" />
</p>


## Getting started

`npm i @pnthach95/react-native-root-view-background --save`

or

`yarn add @pnthach95/react-native-root-view-background`

## Usage
```javascript
import { setRootViewBackgroundColor } from 'react-native-root-view-background';

export default class Main extends Component {
    componentDidMount(){
        setRootViewBackgroundColor('#ccc');
    }
}
```

## License

MIT
