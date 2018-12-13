import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './src/Login';
import Home from './src/Home';
import Loading from './src/Loading';

const HomeStack = createStackNavigator(
  { home: { screen: Home } },
  { headerMode: 'none' },
);

const LoginStack = createStackNavigator(
  { login: { screen: Login } },
  { headerMode: 'none' },
);

const Stack = createSwitchNavigator(
  {
    loading: Loading,
    login: LoginStack,
    home: HomeStack,
  }, {
    initialRouteName: 'loading',
    headerMode: 'none',
  },
);

export default createAppContainer(Stack);
