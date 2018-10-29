import React,  { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';


export default class LoginForm extends Component{
  render(){
    
    return(

      <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
      />
        <TextInput
        placeholder="Usuário"
        placeholderTextColor="#2c3e50"
        returnKeyType="Next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        style={styles.input}
        />
        <TextInput
        placeholder="Senha"
        placeholderTextColor="#2c3e50"
        returnKeyType="Go"
        autoCorrect={false}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
        
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