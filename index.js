// index.js

import { AppRegistry } from 'react-native';
import App from './App';
import Home from './routes/Home'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
