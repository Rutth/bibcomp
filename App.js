import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Login from './components/Login/Login';
import RegForm from './components/Registro/RegForm';
import Index from './components/Index/Index';


import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    PaginaLogin: Login,
    PaginaSignup: RegForm,
    PaginaIndex: Index, 
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


