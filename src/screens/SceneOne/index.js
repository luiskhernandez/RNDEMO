import React , { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class SceneOne extends Component {
  next = () => {
    this.props.navigation.navigate('KeyboardIssue')
  }
  render() {
      return (
          <View style={styles.container}>
              <Text>{'Scene one'}</Text>
              <TouchableOpacity style={styles.button} onPress={() => this.next()} >
               <Text>go to Scene Two</Text>
              </TouchableOpacity>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
  },
})
