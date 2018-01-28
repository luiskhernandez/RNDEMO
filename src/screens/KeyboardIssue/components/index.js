import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Spacer from './Spacer';
import styles from './styles'
import KeyboardWrapper from './keyboardWrapper';


export default class App extends Component {
  next = () => {
    this.props.navigation.navigate('SceneOne')
  }
   render() {
     return (
      <KeyboardWrapper>
         <Grid>
             <Row size={80} style={styles.topSection}>
                 <Spacer />
             </Row>
             <Row size={10}>
              <TouchableOpacity style={styles.button} onPress={() => this.next()} >
               <Text>go to Scene One</Text>
              </TouchableOpacity>
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

