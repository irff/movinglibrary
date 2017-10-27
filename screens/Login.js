import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, Button, Alert } from 'react-native';

import {
  Text,
  Bold
} from '../components/common';

import { observer, inject } from 'mobx-react';
import BaseScreen from '../components/BaseScreen';

@inject('store')
@observer
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Text>PLEASE LOGIN!</Text>
        <Text>CEMMANA INI</Text>
        <Button
          onPress={ () => this.props.store.userStore.auth() }
          title="Login with Facebook"
        />
      </BaseScreen>
    );
  }
}
