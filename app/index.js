import React, { Component } from 'react';


// our components
import Login from './auth/login';

import {
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}


