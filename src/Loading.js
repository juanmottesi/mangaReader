import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './services/Auth';

export default class Loading extends Component {
  componentDidMount() {
    Auth.isLoggedIn()
      .then(user => {
        if(user) {
          this.props.navigation.navigate('home')
        } else {
          this.props.navigation.navigate('login')
        }
      })
      .catch(() => this.props.navigation.navigate('login'))
  }

  render() {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
