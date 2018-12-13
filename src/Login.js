import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

import profile from './dist/image/user.svg';
import password from './dist/image/lock.svg';

import Api from './services/Api';
import Button from './components/Button';
import Helper from './dist/Helper';
import Input from './components/Input';
import ErrorMessage from './components/ErrorMessage';

import defStyles from './dist/styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  handleChange(prop, data) {
    this.setState({ [prop]: data });
  }

  executeLogin() {
    Api.login({ username: this.state.username, password: this.state.password })
      .then(() => {
        this.props.navigation.navigate('home');
      })
      .catch(error => this.setState({ error: error.message }));
  }

  showError() {
    if (this.state.error) {
      return <ErrorMessage text={this.state.error} />;
    }
    return null;
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Text>ICONO</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              image={profile}
              placeholder="Usuario"
              value={this.state.username}
              onChange={data => this.handleChange('username', data)}
            />
            <Input
              password
              image={password}
              placeholder="Contraseña"
              value={this.state.password}
              onChange={data => this.handleChange('password', data)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button text="Login" onPress={() => this.executeLogin()} />
          </View>
          <View style={styles.errorContainer}>
            {this.showError()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },

  errorContainer: {
    flex: 1,
    alignItems: 'center',
    width: '85%',
  },

  iconContainer: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    height: Helper.heightPercentageToDP(40),
  },

  inputContainer: {
    width: '95%',
    alignSelf: 'center',
    height: Helper.heightPercentageToDP(15),
  },

  buttonContainer: {
    width: '45%',
    alignSelf: 'center',
    height: Helper.heightPercentageToDP(15),
  },

  error: {
    color: defStyles.errorColor,
  },

  safeAreaContainer: {
    flex: 1,
    backgroundColor: defStyles.primaryBackgroundColor,
  },

});

export default Login;
