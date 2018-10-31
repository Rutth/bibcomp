import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import RegForm from '../Registro/RegForm';


export default class Login extends Component {
  render(){
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        
        <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('./bibcompLogo.png')} 
        />

        <Text style={styles.title}></Text>

        </View>

        <View style={styles.formContainer}>
          <LoginForm />
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#dff9fb'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: '##2c3e50',
    marginTop: 0,
    width: 150,
    textAlign: 'center',
    opacity: 0.3 
  }
});