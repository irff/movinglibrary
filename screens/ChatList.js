import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';

import * as theme from '../constants/theme';

import {
  Text,
  Bold,
  Heading,
  Container,
  Row,
  Flex,
} from '../components/common';

import ProfilePicture from '../assets/images/ChatProfileDummy.jpg';
import PesanIcon from '../assets/images/icons/pesan.png';
import PesanIconActive from '../assets/images/icons/pesan-ac.png';

import BaseScreen from '../components/BaseScreen';

export default class ChatList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Pesan',
    tabBarIcon: ({ tintColor }) => (tintColor === theme.teal ? (
        <Image
          source={PesanIconActive}
          style={{ width: 26, height: 26 }}
        />
      ) : (
        <Image
          source={PesanIcon}
          style={{ width: 26, height: 26 }}
        />
      )),
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <BaseScreen>
        <ScrollView>
          <Container>
            <Heading>Pesan</Heading>
            <Row style={{ marginTop: 64, flexDirection: 'column' }}>
              <TouchableOpacity onPress={() => navigate('chat')} activeOpacity={0.7}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 16, paddingBottom: 16, borderBottomColor: theme.divider, borderBottomWidth: 1 }}>
                  <Image
                    source={ProfilePicture}
                    style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}
                  />
                  <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Bold
                      numberOfLines={1}
                      style={{ fontSize: 24, color: theme.teal }}
                    >
                      Seol Hyun
                    </Bold>
                    <View
                      numberOfLines={1}
                      style={{ width: 24, height: 24, padding: 4, backgroundColor: theme.yellow, borderRadius: 8, marginLeft: 8 }}
                    >
                      <Bold style={{ fontSize: 16, color: theme.white, lineHeight: 14, textAlign: 'center' }}>
                        2
                      </Bold>
                    </View>
                    <Bold
                      numberOfLines={1}
                      style={{ fontSize: 16, color: theme.black }}
                    >
                      Nanti pinjamnya mau bagaimana?
                    </Bold>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 12, color: theme.grey }}
                    >
                      Semenit yang lalu
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('chat')} activeOpacity={0.7}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 16, paddingBottom: 16, borderBottomColor: theme.divider, borderBottomWidth: 1 }}>
                  <Image
                    source={ProfilePicture}
                    style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}
                  />
                  <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 24, color: theme.teal }}
                    >
                      Seol Hyun
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 16, color: theme.black }}
                    >
                      Nanti pinjamnya mau bagaimana?
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 12, color: theme.grey }}
                    >
                      Semenit yang lalu
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('chat')} activeOpacity={0.7}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 16, paddingBottom: 16, borderBottomColor: theme.divider, borderBottomWidth: 1 }}>
                  <Image
                    source={ProfilePicture}
                    style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}
                  />
                  <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 24, color: theme.teal }}
                    >
                      Seol Hyun
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 16, color: theme.black }}
                    >
                      Nanti pinjamnya mau bagaimana?
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 12, color: theme.grey }}
                    >
                      Semenit yang lalu
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('chat')} activeOpacity={0.7}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 16, paddingBottom: 16, borderBottomColor: theme.divider, borderBottomWidth: 1 }}>
                  <Image
                    source={ProfilePicture}
                    style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}
                  />
                  <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 24, color: theme.teal }}
                    >
                      Seol Hyun
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 16, color: theme.black }}
                    >
                      Nanti pinjamnya mau bagaimana?
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 12, color: theme.grey }}
                    >
                      Semenit yang lalu
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('chat')} activeOpacity={0.7}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 16, paddingBottom: 16, borderBottomColor: theme.divider, borderBottomWidth: 1 }}>
                  <Image
                    source={ProfilePicture}
                    style={{ width: 80, height: 80, borderRadius: 40, marginRight: 20 }}
                  />
                  <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 24, color: theme.teal }}
                    >
                      Seol Hyun
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 16, color: theme.black }}
                    >
                      Nanti pinjamnya mau bagaimana?
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 12, color: theme.grey }}
                    >
                      Semenit yang lalu
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

            </Row>
          </Container>
        </ScrollView>
      </BaseScreen>
    );
  }
}
