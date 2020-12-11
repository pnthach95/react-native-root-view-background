import { AppRegistry, LogBox } from 'react-native';
import App from './src/route';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
