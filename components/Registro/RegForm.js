import React,  { Component } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import firebase from 'firebase'
import config from '../db'

export default class RegForm extends Component{
  signup(){
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true
    });
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    // Make a call to firebase to create a new user.
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        // then and catch are methods that we call on the Promise returned from
        // createUserWithEmailAndPassword
        alert('Your account was created!');
        let uid = firebase.auth().currentUser;
        firebase.database().ref('Usuarios/'+uid.uid).push({
          nome: this.state.nome,
          email: this.state.email
        })
        this.setState({
          // Clear out the fields when the user logs in and hide the progress indicator.
          email: '',
          nome: '',
          password: '',
          loading: false
        });
    }).catch((error) => {
      // Leave the fields filled when an error occurs and hide the progress indicator.
      this.setState({
        loading: false
      });
      alert("Account creation failed: " + error.message );
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      // used to display a progress indicator if waiting for a network response.
      loading: false,
      email: '',
      nome: '',
      password: ''
    }
  }
  render() {
    return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
      />
        <Text style={styles.header}>Registro</Text>

       <TextInput
          placeholder="Nome de usuário"
          value={this.state.username}
          onChangeText={(nome) => this.setState({nome})}
          returnKeyType="Next"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <TextInput
          placeholder="Senha"
          value={this.state.password}
          //onChangeText={this.handlePasswordChange}
          onChangeText={(password) => this.setState({password})}
          //onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          style={styles.input}

        />
        
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.signup()}>
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