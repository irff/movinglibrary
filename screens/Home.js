import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
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
        <Text>HELLOW EVERBODEY</Text>
        <Text>CEMMANA INI</Text>
      </BaseScreen>
    );
  }
}
