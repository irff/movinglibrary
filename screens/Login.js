import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, Button, Alert } from 'react-native';

import {
  Text,
  Bold
} from '../components/common';

import BaseScreen from '../components/BaseScreen';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: null
  };

  async login() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2015209295401440', {
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Text>PLEASE LOGIN!</Text>
        <Text>CEMMANA INI</Text>
        <Button
          onPress={this.login}
          title="Login with Facebook"
        />
      </BaseScreen>
    );
  }
}
