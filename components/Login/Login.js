import React,  { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import firebase from 'firebase';
import config from '../db';


export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }

  componentDidMount(){
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  handleLogin = () => {
    const { email, password } = this.state
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } 

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('PaginaIndex'))
      .catch(error => this.setState({ errorMessage: error.message }))
      
  }
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
          <View style={styles.container2}>
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

            <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("PaginaSingup")}>
              <Text style={styles.buttonText}>REGISTRAR</Text>
            </TouchableOpacity>
          </View>
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
  container2: {
    padding: 15
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