import React,  { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

import firebase from 'firebase';
import config from '../db';

export default class LoginForm extends Component{
  state = { email: '', password: '', errorMessage: null }

  componentDidMount(){
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  handleLogin(){
    const { email, password } = this.state
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => alert("ok"))//this.props.navigation.navigate(''))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render(){
    
    return(

      <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
      />
        <TextInput
        placeholder="E-mail"
        placeholderTextColor="#2c3e50"
        returnKeyType="Next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        style={styles.input}
        onChangeText={email => this.setState({ email })}
        value={this.state.email}
        />
        <TextInput
        placeholder="Senha"
        placeholderTextColor="#2c3e50"
        returnKeyType="Go"
        autoCorrect={false}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
        onChangeText={password => this.setState({ password })}
          value={this.state.password}
        ref={(input) => this.passwordInput = input}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
      
     
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginBottom: 15, 
    textAlign: 'center',
    color: '#95a5a6',
    paddingHorizontal: 10,   
  },
  buttonContainer: {
    backgroundColor: '#686de0',
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});