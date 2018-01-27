/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative, { Container, KeyboardAvoidingView, Animated, Keyboard, StyleSheet, Text, View, TextInput, ScrollView, Platform } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import { Col, Row, Grid } from "react-native-easy-grid";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

function KeyboardWrapper({ children }) {
  return Platform.OS === 'ios'
    ? <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={60}>
        {children}
      </KeyboardAvoidingView>
    : <View style={{ flex: 1 }}>
        {children}
      </View>;
}

// with KeyboardAvoidingView
export default class App extends Component<{}> {
   render() {
    const spacer = (
      <View style={styles.spacer}>
        <Text style={styles.text} numberOfLines={24}>
          {"Baila como juana la cubana. ".repeat(300)}
        </Text>
      </View>
    );
     return (
      <KeyboardWrapper>
         <Grid style={{backgroundColor: 'yellow' }}>
             <Row size={90} style={styles.topSection}>
                 {spacer}
             </Row>
             <Row size={10}>
               <View style={styles.container}>
                 <TextInput placeholder="Simple test" />
                 <TextInput placeholder="another input" />
               </View>
               <View style={{ height: 60 }} />
             </Row>
         </Grid>
         </KeyboardWrapper>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  topSection: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
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
