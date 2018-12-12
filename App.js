import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const Home = () => <View><Text>Home</Text></View>
const Login = () => <View><Text>Login</Text></View>

const HomeStack = createStackNavigator({ home: { screen: Home } })
const LoginStack = createStackNavigator({ login: { screen: Login } })

class Loading extends Component {
  componentDidMount() {
    if(!'asd') {
      this.props.navigation.navigate('home')
    } else {
      this.props.navigation.navigate('login')
    }
  }

  render() {
    return <View><Text>Loading</Text></View>
  }
}

const Stack = createSwitchNavigator(
  {
    loading: Loading,
    login: LoginStack,
    home: HomeStack,
  }, {
    initialRouteName: 'loading'
  }
)

export default createAppContainer(Stack);

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
