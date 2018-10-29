import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Login extends Component {
  render(){
    return (
      <View style={styles.container}>
        
        <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('../assets/testeLogo.png')} 
        />

        <Text style={styles.title}> app de emprestimo de livro</Text>

        </View>

        <View style={styles.formContainer}>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '##ecf0f1'
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '##2c3e50',
    marginTop: 0,
    width: 150,
    textAlign: 'center',
    opacity: 0.6 
  }
});