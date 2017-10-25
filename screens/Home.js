import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';

import {
  Text,
  Bold
} from '../components/common';

import BaseScreen from '../components/BaseScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Text>Hai, Irfan!</Text>
        <Text>CEMMANA INI</Text>
      </BaseScreen>
    );
  }
}
