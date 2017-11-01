import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import * as theme from '../constants/theme'

import {
  Text,
  Bold,
  Heading,
  Container,
  Row,
  Flex,
} from '../components/common';

import { SearchBar } from 'react-native-elements'
import IlluBisnis from '../assets/illustrations/bisnis.png'
import BookCoverPlaceholder from '../assets/images/BookCoverPlaceholder.jpg';

import BaseScreen from '../components/BaseScreen';
import styled from 'styled-components/native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <SearchBar
          lightTheme
          placeholder="Cari buku, atau penulis"
          containerStyle={{ backgroundColor: theme.darkTeal, borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
          inputStyle={{ backgroundColor: theme.teal, color: theme.white, textAlign: 'center' }}
          placeholderTextColor={theme.white}
          icon={{ color: theme.white }}
        />
        <ScrollView>
          <Container>
            <Heading>Hai, Irfan!</Heading>
            <Text style={{ fontSize: 14 }}>Jelajahi kategori buku yang kamu inginkan </Text>
          </Container>
          <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0 }}>
            <View style={{ width: 16 }} />
            <View style={{ borderRadius: 4, width: 111, height: 68, marginRight: 8 }}>
              <Image
                source={IlluBisnis}
                style={{ position: 'absolute', width: 111, height: 68, borderRadius: 4 }}
              />
              <CategoryTitle>Bisnis</CategoryTitle>
            </View>

            <View style={{ borderRadius: 4, width: 111, height: 68, marginRight: 8 }}>
              <Image
                source={IlluBisnis}
                style={{ position: 'absolute', width: 111, height: 68, borderRadius: 4 }}
              />
              <CategoryTitle>Bisnis</CategoryTitle>
            </View>

            <View style={{ borderRadius: 4, width: 111, height: 68, marginRight: 8 }}>
              <Image
                source={IlluBisnis}
                style={{ position: 'absolute', width: 111, height: 68, borderRadius: 4 }}
              />
              <CategoryTitle>Bisnis</CategoryTitle>
            </View>
            
            <View style={{ borderRadius: 4, width: 111, height: 68, marginRight: 8 }}>
              <Image
                source={IlluBisnis}
                style={{ position: 'absolute', width: 111, height: 68, borderRadius: 4 }}
              />
              <CategoryTitle>Bisnis</CategoryTitle>
            </View>

            <View style={{ borderRadius: 4, width: 111, height: 68, marginRight: 8 }}>
              <Image
                source={IlluBisnis}
                style={{ position: 'absolute', width: 111, height: 68, borderRadius: 4 }}
              />
              <CategoryTitle>Bisnis</CategoryTitle>
            </View>

          </ScrollView>
          
          <Container>
            <Row style={{ marginTop: 32 }}>
              <Heading style={{ fontSize: 20 }}>Buku Populer</Heading>
              <Flex style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text>Lihat Semua ></Text>
              </Flex>
            </Row>
          </Container>
          <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0 }}>
            <View style={{ width: 16 }} />
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            
          </ScrollView>

          <Container>
            <Row style={{ marginTop: 32 }}>
              <Heading style={{ fontSize: 20 }}>Buku Terbaru</Heading>
              <Flex style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text>Lihat Semua ></Text>
              </Flex>
            </Row>
          </Container>
          <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0 }}>
            <View style={{ width: 16 }} />
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            <View style={{ maxWidth: 132, marginRight: 8 }}>
              <Image source={BookCoverPlaceholder} style={{ height: 200, width: 132 }} resizeMode="contain" />
              <Bold numberOfLines={1}>Rediscovering Americanism</Bold>
              <Text numberOfLines={1}>oleh Mark Robert Levin</Text>
            </View>
            
          </ScrollView>

          <Container />
        </ScrollView>
      </BaseScreen>
    );
  }
}

const CategoryTitle = styled(Bold)`
  font-size: 18;
  color: ${theme.white};
  margin-left: 4;
  margin-top: 4;
`