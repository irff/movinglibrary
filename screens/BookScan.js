import React from 'react';
import Expo, { BarCodeScanner, Permissions} from 'expo';
import { StyleSheet, View, Image } from 'react-native';
import styled from 'styled-components/native';

import {
  Text,
  Bold,
  Heading,
  Container,
  Flex,
} from '../components/common';
import * as theme from '../constants/theme'
import Button from '../components/Button'

import BaseScreen from '../components/BaseScreen';
import IlluBarCode from '../assets/illustrations/bars-code.png';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
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
      try {
        this.setState({
          loading: false,
          data: json.items[0],
        })
      } catch(e) {
        this.setState({
          loading: false,
          isbn: '',
          data: null,
        })
      }
    }
  }

  onBookAdd = async () => {
    const { volumeInfo } = this.state.data
    console.log({
      image: volumeInfo.imageLinks.thumbnail,
      title: volumeInfo.title,
      authors:volumeInfo.authors.join(', '),
      category: volumeInfo.categories[0],
      language: volumeInfo.language,
      isbn: this.state.isbn,
    })
    await this.props.store.libraryStore.post({
      image: volumeInfo.imageLinks.thumbnail,
      title: volumeInfo.title,
      authors:volumeInfo.authors.join(', '),
      category: volumeInfo.categories[0],
      language: volumeInfo.language,
      isbn: this.state.isbn,
    })
    this.props.navigation.navigate('collection')
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <Container style={{ backgroundColor: theme.white, position: 'absolute', top: 0, elevation: 2, width: '100%' }}>
          <Heading>Tambah Buku</Heading>
        </Container>
        <Flex style={{elevation: 0}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
          />
        </Flex>

        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, elevation: 2 }}>
          {!this.state.isbn && 
            <View style={{ alignItems: 'center' }}>
              <Image source={IlluBarCode} style={{ width: 56, height: 36 }} />
              <Text style={{ maxWidth: 250, marginTop: 18, marginBottom: 24, color: theme.white, textAlign: 'center' }}>Arahkan kamera pada bar-code ISBN buku yang akan Kamu tambahkan</Text>
            </View>
          }
          {!!this.state.isbn &&
            <View style={{ backgroundColor: theme.white }}>
              <Container>
                {this.state.loading && <Text>Loading...</Text>}
                {!!this.state.data && !this.state.loading &&
                  <View style={{ flexDirection: 'row'}}>
                    <View style={{ width: 85, height: 120  }}>
                      <Image source={{ uri: this.state.data.volumeInfo.imageLinks.thumbnail, width: 85, height: 120, resizeMode: 'contain' }} />
                    </View>
                    <Flex style={{ marginLeft: 16 }}>
                      <Bold numberOfLines={2} style={{ color: theme.teal, fontSize: 14 }}>{this.state.data.volumeInfo.title}</Bold>
                      <Text style={{ marginBottom: 8 }}>by {this.state.data.volumeInfo.authors.join(', ')}</Text>
                      {this.state.data.volumeInfo.industryIdentifiers.map(id =>
                        <Text key={id.type}>{`${id.type.replace('_', '')} ${id.identifier}`}</Text>
                      )}
                    </Flex>
                  </View>
                }
              </Container>
              <Container>
                <Button title="+ Tambah Buku" onPress={this.onBookAdd} />
              </Container>
            </View>
          }
        </View>
      </BaseScreen>
    );
  }
}


