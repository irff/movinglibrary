
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

import PinjamIcon from '../assets/images/icons/pinjam.png';
import PinjamIconActive from '../assets/images/icons/pinjam-ac.png';

import styled from 'styled-components/native'
import { SearchBar, Divider, Avatar } from 'react-native-elements'
import BaseScreen from '../components/BaseScreen';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Meminjam extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Meminjam',
    tabBarIcon: null,
  };

  state = {
    loaded: false,
  }

  async componentDidMount() {
    this.props.store.pinjamanStore.getOrders();
    this.setState({ loaded: true })
  }

  render() {
    const { navigate } = this.props.screenProps.parentNavigation;

    return (
      <ScrollView>
        <Container>
        {this.state.loaded && this.props.store.pinjamanStore.borrows.map(item =>
          <TouchableOpacity onPress={() => navigate('pinjamDetail', { record: item })} activeOpacity={0.7} key={item.id}>
            <Card>
              <Image
                source={{ uri: item.book.image }}
                style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                resizeMode="cover"
              />
              <Flex style={{ padding: 12 }}>
                <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>{item.book.title}</Bold>
                <Text style={{ fontSize: 12 }}>{item.book.authors}</Text>
                <Text style={{ fontSize: 12 }}><Bold>{item.library.user.name} •</Bold> Beji, Depok</Text>
                <Flex style={{ justifyContent: 'flex-end' }}>
                  <Bold style={{ fontSize: 12, color: theme.muted }}>{item.status}</Bold>
                </Flex>
              </Flex>
            </Card>
          </TouchableOpacity>
        )}
        </Container>
      </ScrollView>
    );
  }
}

@inject('store')
@observer
class Dipinjam extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Dipinjam',
    tabBarIcon: null
  };

  state = {
    loaded: false,
  }

  async componentDidMount() {
    this.props.store.pinjamanStore.getOrders();
    this.setState({ loaded: true })
  }

  render() {
    const { navigate } = this.props.screenProps.parentNavigation;

    return (
      <ScrollView>
      <Container>
      {this.state.loaded && this.props.store.pinjamanStore.lends.map(item =>
        <TouchableOpacity onPress={() => navigate('pinjamDetail', { record: item })} activeOpacity={0.7} key={item.id}>
          <Card>
            <Image
              source={{ uri: item.book.image }}
              style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
              resizeMode="cover"
            />
            <Flex style={{ padding: 12 }}>
              <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>{item.book.title}</Bold>
              <Text style={{ fontSize: 12 }}>{item.book.authors}</Text>
              <Text style={{ fontSize: 12 }}><Bold>{item.library.user.name} •</Bold> Beji, Depok</Text>
              <Flex style={{ justifyContent: 'flex-end' }}>
                <Bold style={{ fontSize: 12, color: theme.muted }}>{item.status}</Bold>
              </Flex>
            </Flex>
          </Card>
        </TouchableOpacity>
      )}
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
    tabBarIcon: ({ tintColor }) => (tintColor === theme.teal ? (
        <Image
          source={PinjamIconActive}
          style={{ width: 26, height: 26 }}
        />
      ) : (
        <Image
          source={PinjamIcon}
          style={{ width: 26, height: 26 }}
        />
      )),
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
