import { observable, action, computed, autorun } from 'mobx';
import { StyleSheet, Text, View, Button, ALert } from 'react-native';

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
}

class ProfileStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}
