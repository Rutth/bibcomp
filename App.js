import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import Login from './components/Login/Login';
import RegForm from './components/Registro/RegForm';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    PaginaLogin: Login
    },
  {
    initialRouteName: 'PaginaLogin',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}


