import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

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
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
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
  
  state = {
    loaded: false
  }
  
  async componentDidMount() {
    const { query } = this.props.navigation.state.params;
    await this.props.store.homeStore.search(query);
    this.setState({ loaded: true })
  }

  search = e => {
    this.props.navigation.navigate('searchResult', { query: e.nativeEvent.text })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { query } = this.props.navigation.state.params;
    const { searchResult } = this.props.store.homeStore;

    return (
      <BaseScreen>
        <SearchBar
          lightTheme
          placeholder="Cari buku, atau penulis"
          containerStyle={{ backgroundColor: theme.darkTeal, borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
          inputStyle={{ backgroundColor: theme.teal, color: theme.white, textAlign: 'center' }}
          placeholderTextColor={theme.white}
          icon={{ color: theme.white }}
          defaultValue={query}
          onSubmitEditing={this.search}
        />
        <ScrollView containerStyle={{ backgroundColor: theme.canvas }}>
         {!this.state.loaded && <ActivityIndicator /> }
         {this.state.loaded &&  
          <View>
            <Container>
              <Text><Bold>{searchResult.length}</Bold> hasil pencarian, <Bold>{searchResult.filter(r => r.status === 'available').length}</Bold> tersedia</Text>
            </Container>
            <Container>
              {searchResult.map(r =>
                <TouchableOpacity onPress={() => navigate('bookDetail')} key={r.id}>
                  <Card>
                    <Image
                      source={{ uri: r.book.image }}
                      style={{ height: 90, width: 70, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }}
                      resizeMode="cover"
                    />
                    <Flex style={{ padding: 12 }}>
                      <Bold style={{ color: theme.teal, fontSize: 14 }} numberOfLines={1}>{ r.book.title }</Bold>
                      <Text style={{ fontSize: 12 }}>{r.book.authors.toUpperCase()}</Text>
                      <Text style={{ fontSize: 12 }}><Bold>{r.library.user.name} •</Bold> Beji, Depok</Text>
                      <Flex style={{ justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: 12, color: theme.teal }}>0,5 KM</Text>
                      </Flex>
                    </Flex>
                  </Card>
                </TouchableOpacity>
              )}
            </Container>
          </View>
        }
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