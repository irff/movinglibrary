import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
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
import ImgLogo from '../assets/images/logo.png'
import ImgLoginBg from '../assets/images/loginbg.jpg'

import styled from 'styled-components/native'
import { SearchBar, Divider, Avatar, SocialIcon } from 'react-native-elements'
import BaseScreen from '../components/BaseScreen';

import { observer, inject } from 'mobx-react';
import {Library} from '../models/index';

@inject('store')
@observer
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Login',
    tabBarIcon: null
  };

  componentDidMount() {
    if (this.props.store.userStore.user) {
      this.props.navigation.navigate('main')
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <Image source={ImgLoginBg} style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} resizeMode="cover" />
        <View style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: theme.darkTeal, opacity: 0.8 }} />
        <View style={{ margin: 32, marginTop: 90, elevation: 1 }}>
          <Image source={ImgLogo} style={{ height: 72, width: 105 }} />
          <Heading style={{ color: theme.white, maxWidth: 256 }}>Connecting High Quality Books with Readers</Heading>
        </View>
        <View style={{ margin: 32, elevation: 1, flex: 1, justifyContent: 'flex-end' }}>
          <SocialIcon
            title='Masuk dengan Facebook'
            fontFamily='cerebri-extra-bold'
            button
            light
            raised={false}
            type='facebook'
            onPress={() => this.props.store.userStore.auth(() => navigate('main'))}
          />
          <Text style={{ fontSize: 10, marginTop: 12, color: theme.white, textAlign: 'center' }}>Informasi Kamu aman dengan kami. Masuk Moving Library dengan akun Facebook-mu sekarang.</Text>
        </View>
      </View>
    );
  }
}
