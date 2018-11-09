import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, AsyncStorage } from 'react-native';

import firebase from 'firebase'
import config from '../db'

export default class Index extends Component {
state = { currentUser: null, nome: '', usuario: '' }

  componentDidMount() {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 

    console.log("currentUser " + firebase.auth().currentUser)
    const currentUser = firebase.auth().currentUser;
        
    AsyncStorage.getItem('Usuarios/').then((user_data_json) => {
      let userData = JSON.parse(user_data_json);
      console.log("userData " + userData)
      this.setState({
        usuario: userData,
        loading: false
      });
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ currentUser: user })
        //const usuarioRef = firebase.database().ref().child("Usuarios").child(user.uid)
        //console.log(usuarioRef)
        //let variavel = JSON.parse(usuarioRef)
        //alert("currentUser " + this.props.firebaseApp.auth().currentUser)
        const currentUser = this.props.firebaseApp.auth().currentUser;
        
        AsyncStorage.getItem('userData').then((user_data_json) => {
          let userData = JSON.parse(user_data_json);
          console.log("userData " + userData)
          this.setState({
            usuario: userData,
            loading: false
          });
        });
      }
    });

    
  }

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
          <Text>
            Hi {currentUser && currentUser.email}!
          </Text>
          <Text>
            Hi {currentUser && currentUser.uid}!
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});