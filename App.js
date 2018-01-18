/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import HomePage from './HomePage';


export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Currency Worth',
          component: HomePage,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
