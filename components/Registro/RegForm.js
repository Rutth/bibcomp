import React,  { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class RegForm extends Component{
  render() {
    return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
      />
        <Text style={styles.header}>Registro</Text>

       <TextInput
          placeholder="Nome de usuário"
          //value={this.state.username}
          //onChangeText={this.handleUsernameChange}
          returnKeyType="Next"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Endereço de e-mail"
          //value={this.state.email}
         // onChangeText={this.handleEmailChange}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <TextInput
          placeholder="Senha"
          //value={this.state.password}
         // onChangeText={this.handlePasswordChange}
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          style={styles.input}

        />
        
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
    backgroundColor: 'rgba(255,255,255,0.2)',
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
  }


  });