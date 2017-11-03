import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
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
import Timeline from 'react-native-timeline-listview'

import * as theme from '../constants/theme'
import BookCoverPlaceholder from '../assets/images/BookCoverPlaceholder.jpg';

import styled from 'styled-components/native'
import { SearchBar, Divider, Avatar } from 'react-native-elements'
import BaseScreen from '../components/BaseScreen';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class PinjamDetailScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: null
  };

  data = [
    {time: '1 Nov', title: 'Dipesan', description: 'Peminjam memesan ke pemilik buku'},
    {time: '2 Nov', title: 'Dikirim', description: 'Pemilik mengirim buku'},
    {time: '2 Nov', current: true, title: 'Diterima', description: 'Peminjam menerima dan sedang membaca buku'},
    {time: '-', disabled: true, title: 'Dikembalikan', description: 'Peminjam telah selesai membaca buku dan mengembalikan buku'},
    {time: '-', disabled: true, title: 'Selesai', description: 'Pemilik menerima buku yang dikembalikan'},
  ]

  renderEventDetail = data => (
    <View style={{ opacity: data.disabled ? 0.5 : 1 }}>
      {!data.current && <Text style={{ color: theme.black }}>{data.title}</Text>}
      {data.current && <Bold style={{ color: theme.darkTeal }}>{data.title}</Bold>}
      <Text style={{ color: theme.black }}>{data.description}</Text>
    </View>
  )

  render() {
    const { navigate, goBack } = this.props.navigation;
    const { record } = this.props.navigation.state.params;

    return (
      <BaseScreen>
        <Row style={{ backgroundColor: theme.darkTeal, padding: 16 }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="md-arrow-back" size={24} color={theme.white} />
          </TouchableOpacity>
        </Row>
        <ScrollView>
          <Container style={{ backgroundColor: theme.darkTeal, height: 120, position: 'absolute', left: 0, right: 0 }} />
          <View style={{ elevation: 4, width: 147, height: 224, alignSelf: 'center' }}>
            <Image
              source={{ uri: record.book.image }}
              style={{ width: 147, height: 224 }}
            />
          </View>
          <View style={{ alignItems: 'center', padding: 16 }}>
            <Bold style={{ color: theme.teal, fontSize: 20 }}>{record.book.title}</Bold>
            <Text style={{ marginBottom: 12 }}>{record.book.authors.toUpperCase()}</Text>
            <Text style={{ color: theme.muted, fontSize: 12 }}>2010 · Oxford Publication · {record.book.language === 'id' ? 'Bahasa Indonesia': 'English'}</Text>
          </View>

          <Container>
            {record.user_id === this.props.store.userStore.user.user.id &&
              <Row>
                <Flex style={{ marginRight: 12 }}>
                  <Bold style={{ fontSize: 16 }}>Pemilik Buku</Bold>
                  <Text><Bold>{record.library.user.name} •</Bold> Tebet, Jakarta Selatan</Text>
                  <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                </Flex>
                <Avatar
                  large
                  rounded
                  source={{uri: record.library.user.avatar }}
                />
              </Row>
            }
            {record.user_id !== this.props.store.userStore.user.user.id &&
              <Row>
                <Flex style={{ marginRight: 12 }}>
                  <Bold style={{ fontSize: 16 }}>Peminjam Buku</Bold>
                  <Text><Bold>{record.user.name} •</Bold> Tebet, Jakarta Selatan</Text>
                  <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                </Flex>
                <Avatar
                  large
                  rounded
                  source={{uri: record.user.avatar }}
                />
              </Row>
            }
          </Container>

          <Divider style={{ backgroundColor: theme.divider, height: 2, marginLeft: 16, marginRight: 16 }} />

          <Container>
            <Timeline
              data={this.data}
              circleColor={theme.teal}
              lineColor={theme.teal}
              renderDetail={this.renderEventDetail}
            />
          </Container>

        </ScrollView>
        <Container style={{ backgroundColor: theme.white, elevation: 4 }}>
          <Row>
            <Flex>
              <Button title="Dikembalikan" onPress={() => navigate('review', { record })} />
            </Flex>
          </Row>
        </Container>
      </BaseScreen>
    );
  }
}


const Card = styled(Row)`
  elevation: 3;
  background-color: ${theme.white};
  border-radius: 2;
  margin-bottom: 12;
`
