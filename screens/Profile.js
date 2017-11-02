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
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
              }}
            >
              <MapView.Circle
                center={{ 
                  latitude: 37.78825,
                  longitude: -122.4324
                }}
                radius={1000}
                strokeColor="transparent"
                fillColor="rgba(120, 210, 255, 0.4)"
              />
            </MapView>
          </Container>

          <Divider style={{ height: 2, backgroundColor: theme.divider, marginLeft: 16, marginRight: 16 }} />

          <Container>
            <SectionHeading>Review</SectionHeading>
            <Row style={{ alignItems: 'center' }}>
              <Avatar medium rounded source={{ uri: 'http://i.pravatar.cc/200' }} />
              <Flex style={{ marginLeft: 12 }}>
                <Text><Bold>Tito •</Bold> Tebet, Jakarta Selatan</Text>
                <Row style={{ alignItems: 'center' }}>
                  <Ionicons name="md-thumbs-up" color={theme.darkTeal} size={18} />
                  <Text style={{ fontSize: 12, color: theme.gray, marginLeft: 8 }}>Sangat Baik - 4/5</Text>
                </Row>
              </Flex>
            </Row>
            <Text style={{ marginTop: 16 }}>“Shylla ini cepat tanggap, dia sangat bertanggung jawab ketika meminjam buku saya.”</Text>
            <Text style={{ marginTop: 22, color: theme.darkTeal }}>Lihat semua review</Text>
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