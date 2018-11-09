import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Login from './components/Login/Login';
import RegForm from './components/Registro/RegForm';

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    PaginaLogin: Login,
    PaginaSignup: RegForm
    },
  {
    initialRouteName: 'PaginaLogin',
    navigationOptions: {
      header: null
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}


