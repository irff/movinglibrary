import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, Image } from 'react-native';

import * as theme from '../constants/theme';

import {
  Text,
  Bold
} from '../components/common';

import PesanIcon from '../assets/images/icons/pesan.png';
import PesanIconActive from '../assets/images/icons/pesan-ac.png';

import BaseScreen from '../components/BaseScreen';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ tintColor }) => (tintColor === theme.teal ? (
        <Image
          source={PesanIconActive}
          style={{ width: 26, height: 26 }}
        />
      ) : (
        <Image
          source={PesanIcon}
          style={{ width: 26, height: 26 }}
        />
      )),
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
