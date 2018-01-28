import React , { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { increment } from './actions';
import styles from './styles';

class SceneOne extends Component {
  next = () => {
    this.props.navigation.navigate('KeyboardIssue', {
      transition: 'customTransition'
    })
  }
  render() {
    const { counter, increment } = this.props
      return (
          <View style={styles.container}>
              <Text> Home {counter }</Text>
              <TouchableOpacity style={styles.button} onPress={increment} >
               <Text>Increment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.next()} >
               <Text>Keyboard issue (custom transition)</Text>
              </TouchableOpacity>
          </View>
      )
  }
}

function mapStateToProps (state) {
  return {
    counter: state.counter,
  }
}

const  mapDispatchToProps = {
  increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SceneOne)
