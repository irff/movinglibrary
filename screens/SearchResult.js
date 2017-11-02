import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import {
  Text,
  Bold,
  Heading,
  Container,
  Row,
  Flex,
} from '../components/common';

import * as theme from '../constants/theme'
import BookCoverPlaceholder from '../assets/images/BookCoverPlaceholder.jpg';

import ExploreIcon from '../assets/images/icons/explore.png';
import ExploreIconActive from '../assets/images/icons/explore-ac.png';

import styled from 'styled-components/native'
import { SearchBar } from 'react-native-elements'
import BaseScreen from '../components/BaseScreen';

export default class SearchResultScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Jelajah',
    tabBarIcon: ({ tintColor }) => (tintColor === theme.teal ? (
        <Image
          source={ExploreIconActive}
          style={{ width: 26, height: 26 }}
        />
      ) : (
        <Image
          source={ExploreIcon}
          style={{ width: 26, height: 26 }}
        />
      )),
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
        <ScrollView containerStyle={{ backgroundColor: theme.canvas }}>
          <Container>
            <Text><Bold>5</Bold> hasil pencarian, <Bold>3</Bold> tersedia</Text>
          </Container>
          <Container>
            <TouchableOpacity onPress={() => navigate('bookDetail')}>
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
                    <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                  </Flex>
                </Flex>
              </Card>
            </TouchableOpacity>

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
                  <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                </Flex>
              </Flex>
            </Card>

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
                  <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                </Flex>
              </Flex>
            </Card>

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
                  <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                </Flex>
              </Flex>
            </Card>

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
                  <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                </Flex>
              </Flex>
            </Card>
          </Container>
        </ScrollView>
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