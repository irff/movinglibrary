import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';

import {
  Text,
  Bold
} from '../components/common';

import BaseScreen from '../components/BaseScreen';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Text>Profile</Text>
        <Text>CEMMANA INI</Text>
      </BaseScreen>
    );
  }
}
