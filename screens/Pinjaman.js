
import { TabNavigator } from 'react-navigation';
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

class Meminjam extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Meminjam',
    tabBarIcon: null
  };

  render() {
    const { navigate } = this.props.screenProps.parentNavigation;

    return (
      <ScrollView>
        <Container>
          <TouchableOpacity onPress={() => navigate('bookDetail')} activeOpacity={0.7}>
            <Card>
              <Image
                source={BookCoverPlaceholder}
                style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                resizeMode="cover"
              />
              <Flex style={{ padding: 12 }}>
                <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>Einstein: His Life and Universe</Bold>
                <Text style={{ fontSize: 12 }}>WALTER ISAACSON</Text>
                <Text style={{ fontSize: 12 }}><Bold>Ilyas Fahreza •</Bold> Beji, Depok</Text>
                <Flex style={{ justifyContent: 'flex-end' }}>
                  <Bold style={{ fontSize: 12, color: theme.muted }}>DIPESAN</Bold>
                </Flex>
              </Flex>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('bookDetail')} activeOpacity={0.7}>
            <Card>
              <Image
                source={BookCoverPlaceholder}
                style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                resizeMode="cover"
              />
              <Flex style={{ padding: 12 }}>
                <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>Einstein: His Life and Universe</Bold>
                <Text style={{ fontSize: 12 }}>WALTER ISAACSON</Text>
                <Text style={{ fontSize: 12 }}><Bold>Ilyas Fahreza •</Bold> Beji, Depok</Text>
                <Flex style={{ justifyContent: 'flex-end' }}>
                  <Bold style={{ fontSize: 12, color: theme.muted }}>DIPESAN</Bold>
                </Flex>
              </Flex>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('bookDetail')} activeOpacity={0.7}>
            <Card>
              <Image
                source={BookCoverPlaceholder}
                style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                resizeMode="cover"
              />
              <Flex style={{ padding: 12 }}>
                <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>Einstein: His Life and Universe</Bold>
                <Text style={{ fontSize: 12 }}>WALTER ISAACSON</Text>
                <Text style={{ fontSize: 12 }}><Bold>Ilyas Fahreza •</Bold> Beji, Depok</Text>
                <Flex style={{ justifyContent: 'flex-end' }}>
                  <Bold style={{ fontSize: 12, color: theme.muted }}>DIPESAN</Bold>
                </Flex>
              </Flex>
            </Card>
          </TouchableOpacity>
        </Container>
      </ScrollView>
    );
  }
}

class Dipinjam extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Dipinjam',
    tabBarIcon: null
  };

  render() {
    return (
      <ScrollView>
      <Container>
        <TouchableOpacity onPress={() => navigate('bookDetail')} activeOpacity={0.7}>
          <Card>
            <Image
              source={BookCoverPlaceholder}
              style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
              resizeMode="cover"
            />
            <Flex style={{ padding: 12 }}>
              <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>Einstein: His Life and Universe</Bold>
              <Text style={{ fontSize: 12 }}>WALTER ISAACSON</Text>
              <Text style={{ fontSize: 12 }}><Bold>Ilyas Fahreza •</Bold> Beji, Depok</Text>
              <Flex style={{ justifyContent: 'flex-end' }}>
                <Bold style={{ fontSize: 12, color: theme.muted }}>DIPESAN</Bold>
              </Flex>
            </Flex>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('bookDetail')} activeOpacity={0.7}>
          <Card>
            <Image
              source={BookCoverPlaceholder}
              style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
              resizeMode="cover"
            />
            <Flex style={{ padding: 12 }}>
              <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>Einstein: His Life and Universe</Bold>
              <Text style={{ fontSize: 12 }}>WALTER ISAACSON</Text>
              <Text style={{ fontSize: 12 }}><Bold>Ilyas Fahreza •</Bold> Beji, Depok</Text>
              <Flex style={{ justifyContent: 'flex-end' }}>
                <Bold style={{ fontSize: 12, color: theme.muted }}>DIPESAN</Bold>
              </Flex>
            </Flex>
          </Card>
        </TouchableOpacity>
      </Container>
    </ScrollView>
    );
  }
}

const PinjamanNavigator = TabNavigator({
  meminjam: {
    screen: Meminjam,
  },
  dipinjam: {
    screen: Dipinjam,
  },
}, {
  tabBarPosition: 'top',
  tabBarOptions: {
    style: {
      backgroundColor: theme.white,
    },
    activeTintColor: theme.black,
    inactiveTintColor: theme.black,
    labelStyle: {
      fontFamily: 'cerebri-extra-bold',
      fontSize: 16,
    },
    indicatorStyle: {
      backgroundColor: theme.teal,
      height: 3,
    },
  },
})

export default class PinjamanScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Pinjaman',
    tabBarIcon: null
  };

  state = {
    duration: 1,
    deliveryMethod: 'meet',
    returnMethod: 'meet',
  };

  render() {
    return (
      <BaseScreen>
        <Container style={{ backgroundColor: theme.white }}>
          <Heading>Daftar Pinjaman</Heading>
        </Container>
        <PinjamanNavigator screenProps={{
          parentNavigation: this.props.navigation,
        }}/>
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
