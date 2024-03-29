import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as theme from '../constants/theme'

import {
  Text,
  Bold,
  Heading,
  Container,
  Row,
  Flex,
} from '../components/common';

import { SearchBar } from 'react-native-elements';
import IlluBisnis from '../assets/illustrations/bisnis.png';
import BookCoverPlaceholder from '../assets/images/BookCoverPlaceholder.jpg';

import ExploreIcon from '../assets/images/icons/explore.png';
import ExploreIconActive from '../assets/images/icons/explore-ac.png';

import BaseScreen from '../components/BaseScreen';
import styled from 'styled-components/native';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class HomeScreen extends React.Component {
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

  state = {
    loaded: false
  }

  async componentDidMount() {
    await this.props.store.homeStore.fetchHome();
    this.setState({ loaded: true })
  }

  search = e => {
    this.props.navigation.navigate('searchResult', { query: e.nativeEvent.text })
  }

  categories = ['Bisnis', 'Edukasi', 'Fiksi', 'Biografi', 'Agama', 'Travel', 'Hobi', 'Kesehatan']

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
          onSubmitEditing={this.search}
        />
        <ScrollView style={{ backgroundColor: theme.white }}>
          <Container>
            <Heading>Hai, {this.props.store.userStore.user.user.name.split(' ')[0]}!</Heading>
            <Text style={{ fontSize: 14 }}>Jelajahi kategori buku yang kamu inginkan </Text>
          </Container>
          <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0, backgroundColor: theme.white }}>
            <View style={{ width: 16 }} />
            {this.categories.map(cat =>
              <TouchableOpacity onPress={() => navigate('searchResult', {query: cat} )} key={cat}>
                <View style={{ borderRadius: 4, width: 111, height: 68, marginRight: 8 }}>
                  <Image
                    source={IlluBisnis}
                    style={{ position: 'absolute', width: 111, height: 68, borderRadius: 4 }}
                  />
                  <CategoryTitle>{cat}</CategoryTitle>
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>
          <Container>
            <Row style={{ marginTop: 32 }}>
              <Heading style={{ fontSize: 20 }}>Buku Populer</Heading>
              <Flex style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text>Lihat Semua ></Text>
              </Flex>
            </Row>
          </Container>
          <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0, backgroundColor: theme.white }}>
            <View style={{ width: 16 }} />
            {!this.state.loaded && <ActivityIndicator />}
            {this.state.loaded && this.props.store.homeStore.popular.map(record =>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('bookDetail', { record })}>
                <View style={{ maxWidth: 132, marginRight: 8 }} key={record.id}>
                  <Image source={{ uri: record.book.image }} style={{ height: 200, width: 132 }} resizeMode="contain" />
                  <Bold numberOfLines={1}>{record.book.title}</Bold>
                  <Text numberOfLines={1}>oleh {record.book.authors}</Text>
                </View>
              </TouchableOpacity>
            )}
          </ScrollView>

          <Container>
            <Row style={{ marginTop: 32 }}>
              <Heading style={{ fontSize: 20 }}>Buku Terbaru</Heading>
              <Flex style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text>Lihat Semua ></Text>
              </Flex>
            </Row>
          </Container>
          <ScrollView horizontal style={{ flexGrow: 0, flexShrink: 0, backgroundColor: theme.white }}>
            <View style={{ width: 16 }} />
            {!this.state.loaded && <ActivityIndicator />}
            {this.state.loaded && this.props.store.homeStore.latest.map(record =>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigate('bookDetail', { record })} key={record.id}>
                <View style={{ maxWidth: 132, marginRight: 8 }}>
                  <Image source={{ uri: record.book.image }} style={{ height: 200, width: 132 }} resizeMode="contain" />
                  <Bold numberOfLines={1}>{record.book.title}</Bold>
                  <Text numberOfLines={1}>oleh {record.book.authors}</Text>
                </View>
              </TouchableOpacity>
            )}
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
`;
