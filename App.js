import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ChatScreen from './screens/Chat';
import ChatListScreen from './screens/ChatList';
import ProfileScreen from './screens/Profile';
import SearchResultScreen from './screens/SearchResult';
import SearchScreen from './screens/Search';
import CheckoutScreen from './screens/Checkout';
import SplashScreen from './screens/Splash';

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const Navigator = StackNavigator({
  home: {
    screen: HomeScreen
  },
  // login: {
  //   screen: LoginScreen
  // },
  // chat: {
  //   screen: ChatScreen
  // },
  // chatList: {
  //   screen: ChatListScreen
  // },
  // profile: {
  //   screen: ProfileScreen
  // },
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
  initialRouteName: 'home',
  headerMode: 'none'
});
