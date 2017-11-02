import React from 'react';
import Expo, { MapView } from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

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
import { lighten, desaturate } from 'polished'

import BaseScreen from '../components/BaseScreen';

export default class CollectionScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Koleksi',
    tabBarIcon: null
  };

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <BaseScreen>
        <ScrollView>
          <Container>
            <Heading>Koleksi Buku</Heading>
            <Row style={{ backgroundColor: desaturate(0.5, lighten(0.4, theme.darkTeal)), padding: 12, alignItems: 'center', borderRadius: 4, marginTop: 8 }}>
              <FontAwesome name="book" size={16} />
              <Flex>
                <Text style={{ marginLeft: 8, fontSize: 10 }}>Tambah penghasilanmu dengan menambah koleksi buku yang Kamu miliki untuk dipinjam oleh pengguna lain</Text>
              </Flex>
            </Row>

            <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: 18 }}>
              <View style={{ maxWidth: 132, flexBasis: '50%', marginTop: 12 }}>
                <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
                <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
                <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
              </View>

              <View style={{ maxWidth: 132, flexBasis: '50%', marginTop: 12 }}>
                <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
                <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
                <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
              </View>

              <View style={{ maxWidth: 132, flexBasis: '50%', marginTop: 12 }}>
                <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
                <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
                <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
              </View>

              <View style={{ maxWidth: 132, flexBasis: '50%', marginTop: 12 }}>
                <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
                <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
                <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
              </View>

              <View style={{ maxWidth: 132, flexBasis: '50%', marginTop: 12 }}>
                <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
                <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
                <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
              </View>

              <View style={{ maxWidth: 132, flexBasis: '50%', marginTop: 12 }}>
                <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
                <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
                <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
              </View>
            </View>
          </Container>
        </ScrollView>

        <Container style={{ backgroundColor: theme.white, elevation: 4 }}>
            <Button title="+ Tambah Buku" onPress={() => navigate('bookScan')} />
          </Container>
      </BaseScreen>
    );
  }
}
