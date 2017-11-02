import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
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
import Rating from 'react-native-lottie-rating';
import BaseScreen from '../components/BaseScreen';

export default class ReviewScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: null
  };

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <BaseScreen>
        <Row style={{ padding: 16 }}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="md-arrow-back" size={24} />
          </TouchableOpacity>
        </Row>
        <ScrollView>
          <Container>
            <Heading style={{ marginBottom: 16 }}>Tulis Review</Heading>

            <Bold style={{ fontSize: 16, marginBottom: 12 }}>Pemilik Buku</Bold>
            <Row style={{ alignItems: 'center' }}>
              <Avatar
                large
                rounded
                source={{uri: "http://i.pravatar.cc/300"}}
              />
              <Flex style={{ marginLeft: 18 }}>
                <Text style={{ fontSize: 18 }}>Tito Syahreza</Text>
                <Text>Jakarta, Indonesia</Text>
              </Flex>
            </Row>

            <Bold style={{ fontSize: 16, marginTop: 32, marginBottom: 12 }}>Data Buku</Bold>
            <Card>
              <Image
                source={BookCoverPlaceholder}
                style={{ height: 140, width: 92, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                resizeMode="cover"
              />
              <Flex style={{ padding: 12 }}>
                <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>Einstein: His Life and Universe</Bold>
                <Text style={{ fontSize: 14 }}>WALTER ISAACSON</Text>
                <Text style={{ fontSize: 14 }}><Bold>Ilyas Fahreza •</Bold> Beji, Depok</Text>
                <Flex style={{ justifyContent: 'flex-end' }}>
                  <Text style={{ color: theme.teal }}>Lihat Buku</Text>
                </Flex>
              </Flex>
            </Card>
          </Container>

        </ScrollView>
        <Container style={{ backgroundColor: theme.white, elevation: 4 }}>
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <Text style={{ marginBottom: 8 }}>Beri nilai untuk <Bold>Tito Syahreza</Bold></Text>
            <Rating />
          </View>
        </Container>
        <Row style={{ backgroundColor: theme.white, elevation: 4 }}>
          <Flex>
            <TextInput style={{ padding: 16 }} placeholder="Tulis review disini" multiline />
          </Flex>
          <TouchableOpacity onPress={() => navigate('profile')}>
            <View style={{ backgroundColor: theme.teal, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="md-send" color={theme.white} size={24} />
            </View>
          </TouchableOpacity>
        </Row>
      </BaseScreen>
    );
  }
}


const Card = styled(Row)`
  background-color: ${theme.divider};
  border-radius: 4;
`
