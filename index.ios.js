/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './app/';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class shopping extends Component {
  render() {
    return (
      <View style={styles.container}>
       <App/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
      padding: 5,
    backgroundColor: '#ffe6dc',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('shopping', () => shopping);
