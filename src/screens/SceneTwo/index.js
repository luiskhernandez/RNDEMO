import React , { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class SceneTwo extends Component {
  next = () => {
    this.props.navigation.navigate('SceneOne')
  }
  render() {
      return (
          <View style={styles.container}>
              <Text>{'Scene Two'}</Text>
              <TouchableOpacity style={styles.button} onPress={this.next} >
               <Text>go to Scene One</Text>
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
      backgroundColor: 'red',
      padding: 10
 },
})

