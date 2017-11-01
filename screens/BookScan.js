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
    loading: false,
    data: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  _handleBarCodeRead = async ({ data }) => {
    if (this.state.isbn !== data) {
      this.setState({ loading: true, isbn: data })
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${data}`)
      const json = await response.json()
      this.setState({
        loading: false,
        data: json.items[0],
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Container style={{ position: 'absolute', top: 0, elevation: 2, width: '100%' }}>
          <Heading>Tambah Buku</Heading>
        </Container>
        <Flex>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
          />
        </Flex>
        <View>
          {!!this.state.isbn &&
            <Container style={{ position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 2, margin: 16 }}>
              <View>
                <Text>{this.state.isbn}</Text>
                {this.state.loading && <Text>Loading...</Text>}
                {!!this.state.data && !this.state.loading &&
                  <Text>{this.state.data.volumeInfo.title}</Text>
                }
              </View>
            </Container>
          }
        </View>
      </BaseScreen>
    );
  }
}


