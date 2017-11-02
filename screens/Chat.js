import React from 'react';
import Expo from 'expo';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Picker, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as theme from '../constants/theme';

import {
  Text,
  Bold,
  Heading,
  Container,
  Row,
  Flex,
} from '../components/common';

import BookCoverPlaceholder from '../assets/images/BookCoverPlaceholder.jpg';
import ProfilePicture from '../assets/images/ChatProfileDummy.jpg';
import PesanIcon from '../assets/images/icons/pesan.png';
import PesanIconActive from '../assets/images/icons/pesan-ac.png';

import BaseScreen from '../components/BaseScreen';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Chat',
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

  state = {
    message: '',
  };

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <BaseScreen>
        <TouchableOpacity onPress={() => goBack()}>
          <Container style={{ paddingBottom: 8 }}>
            <Row>
              <Ionicons name="md-arrow-back" size={24} color={theme.black} />
            </Row>
            <Heading>
              Seol Hyun
            </Heading>
          </Container>
        </TouchableOpacity>
        <ScrollView>
          <Container style={{ paddingBottom: 0 }}>
            <Row style={{ flexDirection: 'column', paddingTop: 16 }}>
              <TouchableOpacity style={{ marginBottom: 32}} activeOpacity={0.7}>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: theme.lightGrey, borderRadius: 8 }}>
                  <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', padding: 16 }}>
                    <Bold numberOfLines={1} style={{ fontSize: 16, color: theme.darkTeal }}>
                      Rediscovering Americanism
                    </Bold>
                    <Text numberOfLines={1} style={{ fontSize: 12, color: theme.black, marginBottom: 4 }}>
                      MARK R. LEVIN
                    </Text>
                    <Text numberOfLines={1} style={{ fontSize: 12, color: theme.black, marginBottom: 4 }}>
                      Ilyas Fahreza • Beji, Depok
                    </Text>
                    <Bold numberOfLines={1} style={{ width: '100%', fontSize: 12, color: theme.black, marginBottom: 4 }}>
                      DIPESAN
                    </Bold>
                    <Bold numberOfLines={1} style={{ fontSize: 12, color: theme.darkTeal }}>
                      Lihat Buku
                    </Bold>
                  </View>
                  <Image
                    source={BookCoverPlaceholder}
                    style={{ width: 92, height: 131, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
                  />
                </View>
              </TouchableOpacity>

              <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', marginBottom: 32 }}>
                <Image
                  source={ProfilePicture}
                  style={{ width: 52, height: 52, borderRadius: 26, marginRight: 8 }}
                />
                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start' }}>
                  <View style={{ minHeight: 52, padding: 16, backgroundColor: theme.lightGrey, borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                    <Text>
                      Hei, aku kirim bukunya nanti malem yaaa!
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 32 }}>
                <View style={{ minHeight: 52, width: 'auto', padding: 16, backgroundColor: theme.darkTeal, borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8 }}>
                  <Text style={{ color: theme.white, textAlign: 'right' }}>
                    Okee, kabarin aja kalo udah dikirim
                  </Text>
                </View>
              </View>

              <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', marginBottom: 32 }}>
                <Image
                  source={ProfilePicture}
                  style={{ width: 52, height: 52, borderRadius: 26, marginRight: 8 }}
                />
                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start' }}>
                  <View style={{ flexGrow: 0, minHeight: 52, padding: 16, backgroundColor: theme.lightGrey, borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                    <Text>
                      Siaaap
                    </Text>
                  </View>
                </View>
              </View>

              <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 32 }}>
                <View style={{ minHeight: 52, width: 'auto', padding: 16, backgroundColor: theme.darkTeal, borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8 }}>
                  <Text style={{ color: theme.white, textAlign: 'right' }}>
                    Thanks!
                  </Text>
                </View>
              </View>

            </Row>
          </Container>
        </ScrollView>
        <Container style={{ backgroundColor: theme.white, elevation: 4, paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}>
          <Row style={{ height: 56 }}>
            <Flex>
              <TextInput
                value={this.state.message}
                onChangeText={(message) => this.setState({ message })}
                placeholder="Ketik pesan anda disini"
                returnKeyType="send"
                style={{ height: 56, padding: 8}}
              />
            </Flex>
            <TouchableOpacity activeOpacity={0.7} style={{ height: 56, width: 56, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: theme.teal }}>
              <Ionicons name="ios-send" size={40} color={theme.white} />
            </TouchableOpacity>
          </Row>
        </Container>
      </BaseScreen>
    );
  }
}
