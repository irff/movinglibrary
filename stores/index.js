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

  @observable popular = []
  @observable latest = []
  @observable searchResult = []

  async fetchHome() {
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)
    const response = await fetch(`${API_URL}records`, {
      headers: {
        Authorization: this.rootStore.userStore.user.token,
      }
    })
    const response_json = await response.json()
    this.popular = shuffleArray(response_json.records.filter(r => !!r.book.image))
    this.latest = response_json.records.filter(r => !!r.book.image)
  }

  async search(query) {
    const response = await fetch(`${API_URL}records?q=${query}`, {
      headers: {
        Authorization: this.rootStore.userStore.user.token,
      }
    })
    const response_json = await response.json()
    this.searchResult = response_json.records.filter(r => !!r.book.image)
  }
}

class LibraryStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable library = []

  async fetch() {
    const response = await fetch(`${API_URL}libraries/me`, {
      headers: {
        Authorization: this.rootStore.userStore.user.token,
      }
    })

    const response_json = await response.json()
    this.library = response_json.library
  }

  async post(data) {
    const response = await fetch(`${API_URL}records`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.rootStore.userStore.user.token,
      }
    })

    const response_json = await response.json()
    console.log(response_json)
    await this.fetch()
  }
}

class PinjamanStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable lends = [];
  @observable borrows = [];
  @observable order;

  async getOrders() {
    let token = this.rootStore.userStore.user.token;
    console.log("token=" + token);

    let headers = {
      "Content-Type": "application/json",
      "Authorization": token
    };

    let response = await fetch(API_URL + 'orders/me', {
      method: 'get',
      headers: new Headers(headers)
    });

    let response_json = await response.json();
    this.lends = response_json.lends;
    this.borrows = response_json.borrows;
    console.log("lends=" + this.lends);
    console.log("borrows=" + this.borrows);
  }

  async getOrder(order_id) {
    let token = this.rootStore.userStore.user.token;
    console.log("token=" + token);

    let headers = {
      "Content-Type": "application/json",
      "Authorization": token
    };

    let response = await fetch(API_URL + 'orders/' + order_id, {
      method: 'get',
      headers: new Headers(headers)
    });

    let response_json = await response.json();
    this.order = response_json;
  }

  async createOrder(data) {
    let token = this.rootStore.userStore.user.token;

    let headers = {
      "Content-Type": "application/json",
      "Authorization": token
    };

    let response = await fetch(API_URL + 'orders', {
      method: 'post',
      headers: new Headers(headers),
      body: JSON.stringify(data)
    });

    let response_json = await response.json();
    await this.rootStore.pinjamanStore.getOrders()
    await this.getOrders()
  }
}




class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable user = null;

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
      // Alert.alert(
      //   'Logged in!',
      //   `Hi ${(await response.json()).name}!`,
      // );
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

    let response = await fetch(API_URL + 'auth/facebook', {
      method: 'post',
      body: JSON.stringify(data),
      headers: new Headers(headers)
    });

    let response_json = await response.json();
    return response_json;
  }

  async auth(cb) {
    let access_token = await this.auth_facebook();
    if(access_token != null) {
      user = await this.auth_backend(access_token);
      this.user = user;
      // TODO: save user to store
      console.log(this.user);
      cb();
    }
  }
}

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.pinjamanStore = new PinjamanStore(this);
    this.libraryStore = new LibraryStore(this)
    this.homeStore = new HomeStore(this)
  }
}

const singleton = new RootStore();
export default singleton;
