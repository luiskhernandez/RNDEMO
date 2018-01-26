/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// width Grid
// export default class App extends Component<{}> {
//   render() {
//     return (
//       <Grid>
//           <Row size={3} style={styles.topSection}>
//             <Text style={styles.welcome}>Hola mundo 23</Text>
//           </Row>
//           <Row size={1}>
//             <View style={styles.container}>
//               <TextInput placeholder="Simple test" />
//               <TextInput placeholder="another input" />
//             </View>
//             <View style={{ height: 60 }} />
//           </Row>
//       </Grid>
//     );
//   }
// }

// with KeyboardAvoidingView
// export default class App extends Component<{}> {
//   render() {
//     return (
//     <KeyboardAvoidingView style={{flex: 1, height: '100%' }}>
//       <Grid>
//           <Row size={3} style={styles.topSection}>
//             <Text style={styles.welcome}>Hola mundo 23</Text>
//           </Row>
//           <Row size={1}>
//             <View style={styles.container}>
//               <TextInput placeholder="Simple test" />
//               <TextInput placeholder="another input" />
//             </View>
//             <View style={{ height: 60 }} />
//           </Row>
//       </Grid>
//     </KeyboardAvoidingView>
//     );
//   }
// }

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.containerr}>
        <TextInput placeholder="Simple test" />
        <TextInput placeholder="another input" />
        <View style={{ height: 60 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%'
  },
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
