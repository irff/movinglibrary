import React from 'react';
import Expo, { MapView } from 'expo';
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
import { mix } from 'polished'

import BaseScreen from '../components/BaseScreen';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: null
  };

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <BaseScreen>
        <ScrollView>
          <Image
            source={{ uri: 'http://i.pravatar.cc/400"' }}
            style ={{
              width: '100%',
              height: 255,
            }}
          />
          <Container>
            <Heading>Shylla Estee P.</Heading>
            <Text style={{ fontSize: 18, marginBottom: 12 }}>Jakarta, Indonesia</Text>
            <Row style={{ alignItems: 'center' }}>
              <Bold style={{ backgroundColor: mix(4.48/5.0, theme.greenRating, theme.redRating), padding: 4, borderRadius: 4, color: theme.white, fontSize: 16 }}>4.48</Bold>
              <Text style={{ color: theme.grey, fontSize: 16, marginLeft: 12 }}>dari 18 Review</Text>
            </Row>
          </Container>

          <Divider style={{ height: 2, backgroundColor: theme.divider, marginLeft: 16, marginRight: 16 }} />

          <Container>
            <SectionHeading>Bio</SectionHeading>
            <Text style={{ marginBottom: 16 }}>“Aku suka membaca buku - buku mengenai product design di waktu senggangku sebagai seorang product designer.”</Text>

            <SectionHeading>Lokasi</SectionHeading>
            <MapView
              style={{ height: 200 }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <MapView.Circle
                center={{ 
                  latitude: 37.78825,
                  longitude: -122.4324
                }}
                radius={1000}
                strokeColor="transparent"
                fillColor="rgba(120, 120, 255, 0.5)"
              />
            </MapView>
          </Container>

          <Divider style={{ height: 2, backgroundColor: theme.divider, marginLeft: 16, marginRight: 16 }} />

          <Container>
            <SectionHeading>Review</SectionHeading>
          </Container>

        </ScrollView>
      </BaseScreen>
    );
  }
}

const SectionHeading = styled(Bold)`
  font-size: 16;
  margin-bottom: 8;
`