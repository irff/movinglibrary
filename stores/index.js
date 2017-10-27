import Expo from 'expo';
import { observable, action, computed, autorun } from 'mobx';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import {
  User,
  Book,
  Author,
  Library,
  Order
} from '../models';

const API_URL = 'http://movingbackend.herokuapp.com/';

class HomeStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

class LibraryStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable user;

  async auth_facebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2015209295401440', {
      permissions: [
        'public_profile',
        'email',
        'user_friends'
      ],
    });

    const access_token = token;

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${access_token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );

      console.log("TOKEN=" + access_token);
      return access_token;
    }
    return null;
  }

  async auth_backend(access_token) {
    let headers = {
      "Content-Type": "application/json"
    };

    let data = {
      'access_token' : access_token
    };

    let response = await fetch('http://movingbackend.herokuapp.com/' + 'auth/facebook', {
      method: 'post',
      body: JSON.stringify(data),
      headers: new Headers(headers)
    });

    let response_json = await response.json();
    return response_json;
  }

  async auth() {
    let access_token = await this.auth_facebook();
    if(access_token != null) {
      console.log("TOKEN RECEIVED=" + access_token);
      user = await this.auth_backend(access_token);
      console.log("USER=" + JSON.stringify(user));

      // TODO: save user to store
    }
  }
}

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
  }
}

const singleton = new RootStore();
export default singleton;
