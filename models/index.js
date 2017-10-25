import { observable, action, computed } from 'mobx';

const API_URL = 'https://movingbackend.herokuapp.com/';

export class User {
  constructor(id, email, name, avatar, role) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.avatar = avatar;
    this.role = role;
  }

  id = '';
  email = '';
  name = '';
  avatar = '';
  facebook_token = '';
  facebook_id = '';
  role = '';
}

export class Book {
  constructor(id, title, description, year_published, image, language) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.year_published = year_published;
    this.image = image;
    this.language = language;
  }

  id = '';
  title = '';
  description = '';
  year_published = '';
  image = '';
  language = '';
}

export class Author {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  id = '';
  name = '';
}

export class Library {
  constructor(id, lat, lng, address) {
    this.id = id;
    this.lat = lat;
    this.lng = lng;
    this.address = address;
  }

  id = '';
  lat = '';
  lng = '';
  address = '';
}

export class Order {
  constructor(id, user_id, book_id, library_id, lat, lng, address) {
    this.id = id;
    this.user_id = user_id;
    this.book_id = book_id;
    this.library_id = library_id;
    this.lat = lat;
    this.lng = lng;
    this.address = address;
  }

  id = '';
  user_id = '';
  book_id = '';
  library_id = '';

  lat = '';
  lng = '';
  address = '';
}
