import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';

import {
  Text,
  Bold
} from '../components/common';

import BaseScreen from '../components/BaseScreen';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Text>Chat</Text>
        <Text>CEMMANA INI</Text>
      </BaseScreen>
    );
  }
}
