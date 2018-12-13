import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import defStyles from '../dist/styles';
import Helper from '../dist/Helper';

export default class Input extends Component {
  render() {
    const colors = [defStyles.fromGradientColor, defStyles.toGradientColor];
    const start = { x: 0, y: 0 };
    const end = { x: 1, y: 0 };
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.flex1} onPress={() => this.props.onPress()}>
          <LinearGradient colors={colors} start={start} end={end} style={styles.center}>
            <Text style={styles.text}>{this.props.text}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: Helper.heightPercentageToDP(5),
  },

  flex1: {
    flex: 1,
    width: '100%',
  },

  center: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Helper.heightPercentageToDP(2.5),
  },

  text: {
    color: defStyles.primaryFontColor,
  },

});
