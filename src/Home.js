import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

// import profile from './dist/image/user.svg';
// import password from './dist/image/lock.svg';

// import Api from './api/Api';
import Button from './components/Button';
import Helper from './dist/Helper';
// import Input from './Input';
// import ErrorMessage from './ErrorMessage';

import defStyles from './dist/styles';
import Auth from './services/Auth';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: { username: '' } };
  }
  componentDidMount() {
    Auth.getUser()
      .then(user => this.setState({ user }))
      .catch(() => this.props.navigation.navigate('login'))
  }

  executeLogout() {
    Auth.logout()
      .then(() => this.props.navigation.navigate('login'));
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text>{this.state.user.username}</Text>
          <Button text="Login" onPress={() => this.executeLogout()} />
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
