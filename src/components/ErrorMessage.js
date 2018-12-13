import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import defStyles from '../dist/styles';

export default class Input extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Error:</Text>
        <Text style={styles.errorText}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    flex: 0.5,
    backgroundColor: defStyles.errorBackgroundColor,
    borderRadius: 5,
  },

  errorTitle: {
    color: defStyles.errorColor,
    fontWeight: 'bold',
    padding: '5%',
  },

  errorText: {
    color: defStyles.errorColor,
    paddingLeft: '10%',
  },

});
