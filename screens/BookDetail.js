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

import * as theme from '../constants/theme'
import BookCoverPlaceholder from '../assets/images/BookCoverPlaceholder.jpg';

import styled from 'styled-components/native'
import { SearchBar, Divider, Avatar } from 'react-native-elements'
import BaseScreen from '../components/BaseScreen';

export default class BookDetailScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: null
  };

  render() {
    const { navigate, goBack } = this.props.navigation;

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
              source={BookCoverPlaceholder}
              style={{ width: 147, height: 224 }}
            />
          </View>
          <View style={{ alignItems: 'center', padding: 16 }}>
            <Bold style={{ color: theme.teal, fontSize: 20 }}>Einstein: His Life and Universe</Bold>
            <Text style={{ marginBottom: 12 }}>WALTER ISAACSON</Text>
            <Text style={{ color: theme.muted, fontSize: 12 }}>2007 · Oxford Publication · English</Text>
          </View>

          <Container>
            <Row>
              <Bold style={{ fontSize: 16 }}>Kategori</Bold>
              <Flex>
                <Text style={{ textAlign: 'right', fontSize: 16, color: theme.teal }}>Biografi</Text>
              </Flex>
            </Row>
          </Container>

          <Divider style={{ backgroundColor: theme.divider, height: 2, marginLeft: 16, marginRight: 16 }} />

          <Container>
            <Row>
              <Flex style={{ marginRight: 12 }}>
                <Bold style={{ fontSize: 16 }}>Pemilik Buku</Bold>
                <Text><Bold>Tito •</Bold> Tebet, Jakarta Selatan</Text>
                <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
              </Flex>
              <Avatar
                large
                rounded
                source={{uri: "http://i.pravatar.cc/300"}}
              />
            </Row>
          </Container>
        </ScrollView>
        <Container style={{ backgroundColor: theme.white, elevation: 4 }}>
          <Row>
            <Flex style={{ marginRight: 12 }}>
              <SecondaryButton title="Chat Pemilik" />
            </Flex>
            <Flex>
              <Button title="Pinjam" />
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