import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Text,
  Bold,
  Heading,
  Container,
  Row,
  Flex,
} from '../components/common';

import Button, {SecondaryButton} from '../components/Button';

import * as theme from '../constants/theme'
import BookCoverPlaceholder from '../assets/images/BookCoverPlaceholder.jpg';

import styled from 'styled-components/native'
import { SearchBar, Divider, Avatar } from 'react-native-elements'
import BaseScreen from '../components/BaseScreen';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class CheckoutScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: null
  };

  state = {
    duration: 1,
    deliveryMethod: 'meet',
    returnMethod: 'meet',
  };

  checkout = async () => {
    const { record } = this.props.navigation.state.params;
    await this.props.store.pinjamanStore.createOrder({
      record_id: record.id,
      delivery_method: this.state.deliveryMethod,
      return_method: this.state.returnMethod,
    })
    this.props.navigation.navigate('pinjaman')
  }

  render() {
    const { navigate, goBack } = this.props.navigation;
    const { record } = this.props.navigation.state.params;
    const { user } = this.props.store.userStore.user;

    return (
      <BaseScreen>
        <Row style={{ padding: 16 }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="md-arrow-back" size={24} />
          </TouchableOpacity>
        </Row>
        <ScrollView>
          <Container style={{ paddingTop: 0 }}>
            <Heading style={{ marginBottom: 12 }}>Isi Data Peminjamanmu</Heading>
            <Bold style={{ fontSize: 16 }}>Data Kamu</Bold>
            <SectionHeading>NAMA LENGKAP</SectionHeading>
            <SectionText disabled>{user.name}</SectionText>
            <SectionHeading>ALAMAT</SectionHeading>
            <SectionText disabled numberOfLines={1}>Unit 19 Tower A, Apartemen Taman Melati</SectionText>
            <SectionHeading>KOTA</SectionHeading>
            <SectionText disabled>Depok</SectionText>
          </Container>

          <Divider style={{ backgroundColor: theme.divider, height: 2, marginLeft: 16, marginRight: 16 }} />

          <Container>
            <Bold style={{ fontSize: 16, marginBottom: 8 }}>Data Buku</Bold>
            <Card>
              <Image
                source={{ uri: record.book.image }}
                style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                resizeMode="cover"
              />
              <Flex style={{ padding: 12 }}>
                <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>{record.book.title}</Bold>
                <Text style={{ fontSize: 12 }}>{record.book.authors.toUpperCase()}</Text>
                <Text style={{ fontSize: 12 }}><Bold>{record.library.user.name} •</Bold> Beji, Depok</Text>
              </Flex>
            </Card>
          </Container>

          <Divider style={{ backgroundColor: theme.divider, height: 2, marginLeft: 16, marginRight: 16 }} />

          <Container>
            <Bold style={{ fontSize: 16 }}>Data Peminjaman</Bold>
            <SectionHeading>LAMA PEMINJAMAN</SectionHeading>
            <Picker selectedValue={this.state.duration} onValueChange={val => this.setState({ duration: val })}>
              <Picker.Item label="1 Minggu" value={1} />
              <Picker.Item label="2 Minggu" value={2} />
              <Picker.Item label="3 Minggu" value={3} />
              <Picker.Item label="4 Minggu" value={4} />
            </Picker>

            <SectionHeading>(PINJAM) METODE PENGIRIMAN</SectionHeading>
            <Picker selectedValue={this.state.deliveryMethod} onValueChange={val => this.setState({ deliveryMethod: val })}>
              <Picker.Item label="Meet-in" value="meet" />
              <Picker.Item label="Go-Send" value="go-send" />
              <Picker.Item label="Pos Indonesia" value="pos" />
              <Picker.Item label="JNE" value="jne" />
            </Picker>

            <SectionHeading>(KEMBALI) METODE PENGIRIMAN</SectionHeading>
            <Picker selectedValue={this.state.returnMethod} onValueChange={val => this.setState({ returnMethod: val })}>
              <Picker.Item label="Meet-in" value="meet" />
              <Picker.Item label="Go-Send" value="go-send" />
              <Picker.Item label="Pos Indonesia" value="pos" />
              <Picker.Item label="JNE" value="jne" />
            </Picker>
          </Container>

          <Container>
            <Row>
              <Flex />
              <Flex>
                <Button title="Lanjut" onPress={this.checkout}/>
              </Flex>
            </Row>
          </Container>

        </ScrollView>
      </BaseScreen>
    );
  }
}

const SectionHeading = styled(Bold)`
  color: ${theme.grey};
  font-size: 12;
  margin-bottom: 4;
  margin-top: 8;
`
const SectionText = styled(Text)`
  ${props => props.disabled && `
    color: ${theme.muted};
    opacity: 0.7;
  `};
  margin-bottom: 4;
`
const Card = styled(Row)`
  background-color: ${theme.divider};
  border-radius: 4;
`
