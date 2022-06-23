import { AppRegistry, LogBox } from 'react-native';
import App from './src/route';

LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent('main', () => App);
