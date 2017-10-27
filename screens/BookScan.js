import React from 'react';
import Expo, { BarCodeScanner, Permissions} from 'expo';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

import {
  Text,
  Bold,
  Heading,
  Container,
  Flex,
} from '../components/common';

import BaseScreen from '../components/BaseScreen';

export default class BookScanScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Scan',
    tabBarIcon: null
  };

  state = {
    hasCameraPermission: null,
    isbn: '',
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _handleBarCodeRead = ({ data }) => {
    if (this.state.isbn !== data) {
      this.setState({ isbn: data })
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Container>
          <Heading>Tambah Buku</Heading>
        </Container>
        <Flex>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
          />
        </Flex>
      </BaseScreen>
    );
  }
}


