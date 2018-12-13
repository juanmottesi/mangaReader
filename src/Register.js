import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

import Button from './components/Button';
import defStyles from './dist/styles';

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text>TODO</Text>
          <Button text="Go Back" onPress={() => this.props.navigation.pop()} />
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

  safeAreaContainer: {
    flex: 1,
    backgroundColor: defStyles.primaryBackgroundColor,
  },

});

export default Login;
