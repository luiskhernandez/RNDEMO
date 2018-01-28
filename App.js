/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './src/store';
import Navigator from './src/navigation';
import { ActivityIndicator } from 'react-native'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size="large" color="#0000ff" />} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App
