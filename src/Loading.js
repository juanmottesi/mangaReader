import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Auth from './services/Auth';

export default class Loading extends Component {
  componentDidMount() {
    Auth.isLoggedIn()
      .then((user) => {
        if (user) {
          this.props.navigation.navigate('home');
        } else {
          this.props.navigation.navigate('login');
        }
      })
      .catch(() => this.props.navigation.navigate('login'));
  }

  render() {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}
