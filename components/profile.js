import * as React from 'react';

import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, StatusBar, ListView } from 'react-native';


import { List, ListItem } from 'react-native-elements'
import { Constants } from 'expo';

 import {
  RNEButton,
  RNECard,
  RNEFormInput,
  RNEFormLabel,
  RNEList,
  RNEListItem,
  RNEPricingCard,
  RNESocialIcon,
  RNEText,
  RNEDivider
} from 'react-native-elements';

<RNEButton
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

// You can import from local files

import AssetExample from './components/AssetExample';

 

// or any pure javascript modules available in npm

import { Card } from 'react-native-paper';

const list = [
  {
    name: 'Game of Thrones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Romance'
  },
  {
    name: 'Pride and Prejudice',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Romance'
  },
  {
    name: 'Pride and Prejudice',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Romance'
  },
  {
    name: 'Pride and Prejudice',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Romance'
  },
  {
    name: 'Pride and Prejudice',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Romance'
  }
]



export default class App extends React.Component {
  render() {

    return (
     <View style={styles.container}>

      <StatusBar

        barStyle="light-content"

      />

      <Text style={styles.header}>Meu Perfil</Text>

      <View style={styles.info}> 
      <Text style={styles.bloctext}>Nome Completo: this.state.Nome</Text>
      <Text style={styles.bloctext}>E-mail: this.state.email</Text>
      <Text style={styles.bloctext}>Nome de Usuario: this.state.Usuario</Text>
      <Text style={styles.bloctext}>Livros Disponiveis: this.state.Livros</Text>
      </View>

      <List containerStyle={{marginBottom: 20}}>
  {
    list.map((l) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={l.name}
        title={l.name}
      />
    ))
  }
</List>
     </View>
    );
   }
}

const styles = StyleSheet.create({

  /*subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },*/

container: {

padding: 15

},

bloctext: {
  fontSize: 20,
  color: '#686de0',
  paddingTop: 30,
  textAlign: 'left',
  paddingBottom: 5,
  marginBottom: 20,
  borderBottomCollor: '#686de0',
  borderBottomWidth: 1
},

info: {
  
},

header: {

    fontSize: 20,

    color: '#686de0',

    paddingTop: 30,

    textAlign: 'center',

    paddingBottom: 10,

    marginBottom: 30,

    borderBottomCollor: '#686de0',

    borderBottomWidth: 1

},

});

