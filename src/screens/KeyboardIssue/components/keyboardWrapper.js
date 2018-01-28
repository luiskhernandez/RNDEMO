import React from 'react';
import { KeyboardAvoidingView, View, Platform } from 'react-native';

function KeyboardWrapper({ children }) {
  return Platform.OS === 'ios'
    ? <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} keyboardVerticalOffset={60}>
        {children}
      </KeyboardAvoidingView>
    : <View style={{ flex: 1 }}>
        {children}
      </View>;
}

export default KeyboardWrapper;
