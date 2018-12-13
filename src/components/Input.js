import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';


import defStyles from '../dist/styles';
import Helper from '../dist/Helper';

export default class Input extends Component {
  renderImage() {
    if (this.props.image) {
      return (
        <SvgUri
          width={Helper.heightPercentageToDP(2.5)}
          height={Helper.heightPercentageToDP(2.5)}
          source={this.props.image}
          style={styles.image}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          { this.renderImage() }
          <TextInput
            autoCapitalize="none"
            secureTextEntry={this.props.password}
            style={styles.textInput}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChange}
            placeholderTextColor={defStyles.primaryFontColor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: Helper.heightPercentageToDP(5),
    paddingBottom: '4%',
  },

  border: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    borderColor: defStyles.primaryFontColor,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    paddingRight: '2%',
    paddingLeft: '2%',
  },

  textInput: {
    width: '100%',
    color: defStyles.primaryFontColor,
  },

  placeholderColor: {
    color: defStyles.primaryFontColor,
  },

});
