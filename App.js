import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Font } from 'expo';
import { Provider } from 'mobx-react'

import * as theme from './constants/theme'

import store from './stores';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ChatScreen from './screens/Chat';
import ChatListScreen from './screens/ChatList';
import ProfileScreen from './screens/Profile';
import SearchResultScreen from './screens/SearchResult';
import SearchScreen from './screens/Search';
import CheckoutScreen from './screens/Checkout';
import SplashScreen from './screens/Splash';
import BookScanScreen from './screens/BookScan';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'cerebri-medium': require('./assets/fonts/CerebriSans-Medium.ttf'),
      'cerebri-extra-bold': require('./assets/fonts/CerebriSans-ExtraBold.ttf')
    });
    this.setState({ fontLoaded: true  });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <Provider store={store}>
          <Navigator />
        </Provider>
      );
    }
    return null;
    }
}

const Navigator = TabNavigator({
  home: {
    screen: HomeScreen
  },
  login: {
    screen: LoginScreen
  },
  chat: {
    screen: ChatScreen
  },
  // chatList: {
  //   screen: ChatListScreen
  // },
  profile: {
    screen: ProfileScreen
  },

  bookScan: {
    screen: BookScanScreen,
  },
  
  // search: {
  //   screen: SearchScreen
  // },
  // searchResult: {
  //   screen: SearchResultScreen
  // },
  // splash: {
  //   screen: SplashScreen
  // }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    style: {
      backgroundColor: theme.darkTeal,
    }
  }
});
