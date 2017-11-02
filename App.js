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
import BookDetailScreen from './screens/BookDetail';

const HomeNavigator = StackNavigator({
  explore: {
    screen: HomeScreen
  },
  searchResult: {
    screen: SearchResultScreen
  },
},
{
  headerMode: 'none',
  initialRouteName: 'explore'
});

const MainNavigator = TabNavigator({
  home: {
    screen: HomeNavigator
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
  // splash: {
  //   screen: SplashScreen
  // }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: theme.teal,
    inactiveTintColor: theme.muted,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: theme.white,
      elevation: 6,
    },
    indicatorStyle: {
      backgroundColor: theme.teal,
    },
  }
});

const RootNavigator = StackNavigator({
  main: {
    screen: MainNavigator,
  },
  bookDetail: {
    screen: BookDetailScreen,
  },
  checkout: {
    screen: CheckoutScreen,
  },
},
{
  headerMode: 'none',
  initialRouteName: 'main',
  navigationOptions: {
    gesturesEnabled: false,
  },
});


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
          <RootNavigator />
        </Provider>
      );
    }
    return null;
    }
}