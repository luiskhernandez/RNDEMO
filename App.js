/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ReactNative, { Animated, Keyboard, StyleSheet, Text, View, TextInput, ScrollView, Platform } from 'react-native';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

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
//export default class App extends Component<{}> {
  // render() {
  //   return (
  //   <KeyboardAvoidingView style={{flex: 1, height: '100%' }}>
  //     <Grid>
  //         <Row size={3} style={styles.topSection}>
  //           <Text style={styles.welcome}>Hola mundo 23</Text>
  //         </Row>
  //         <Row size={1}>
  //           <View style={styles.container}>
  //             <TextInput placeholder="Simple test" />
  //             <TextInput placeholder="another input" />
  //           </View>
  //           <View style={{ height: 60 }} />
  //         </Row>
  //     </Grid>
  //   </KeyboardAvoidingView>
  //   );
  // }
//}

export default class App extends Component {

  state = {
    keyboardHeight: new Animated.Value(0)
  };

  // animateKeyboardHeight = (toValue, duration) => {
  //   Animated.timing(
  //     this.state.keyboardHeight,
  //     {toValue, duration},
  //   ).start();
  // };

  /**
   * From https://facebook.github.io/react-native/docs/keyboard.html#addlistener
   * "Note that if you set android:windowSoftInputMode to adjustResize or adjustNothing,
   * only keyboardDidShow and keyboardDidHide events will available on Android."
   */
  componentWillMount() {
    // if (Platform.OS === "android") {
    //   this.keyboardShowListener = Keyboard.addListener("keyboardDidShow", ({endCoordinates}) => {
    //     this.animateKeyboardHeight(endCoordinates.height, 0)
    //   });
    //   this.keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
    //     this.animateKeyboardHeight(0, 300)
    //   })
    // }
  }

  scrollToInput = (reactNode) => {
    this.view.scrollToFocusedInput(reactNode)
  };

  handleOnFocus = (e) => {
    if (Platform.OS === "android") {
      this.scrollToInput(ReactNative.findNodeHandle(e.target))
    }
  };

  render() {
    const spacer = (
      <View style={styles.spacer}>
        <Text style={styles.text} numberOfLines={24}>
          {"Baila como juana la cubana. ".repeat(30)}
        </Text>
      </View>
    );
    return (
      <KeyboardAwareScrollView
        ref={ref => this.view = ref}
        style={styles.container}
        enableOnAndroid
        extraHeight={Platform.OS === "android" ? 10 : undefined}
      >
        {spacer}
        <TextInput
          onFocus={this.handleOnFocus}
          style={styles.input}
        />
        {/*{spacer}*/}

      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  spacer: {
    minHeight: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: Platform.OS === "android" ? "monospace" : "Courier",
  },
  input: {
    borderColor: "grey",
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
  }
});

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.containerr}>
//         <TextInput placeholder="Simple test" />
//         <TextInput placeholder="another input" />
//         <View style={{ height: 60 }} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   containerr: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     height: '100%'
//   },
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5FCFF',
//   },
//   topSection: {
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
