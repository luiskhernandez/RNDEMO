/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  SceneOne,
  SceneTwo,
  KeyboardIssue
} from './src/screens';
import { StackNavigator } from 'react-navigation';

let MyTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const outputRange = [.8, 1, 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange,
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange,
    });

    return {
    opacity,
        transform: [
            {scaleY}
        ]
    };
};

let TransitionConfiguration = () => {
    return {
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {
            const {position, scene} = sceneProps;
            const {index} = scene;

            return MyTransition(index, position);
        }
    }
};

AppScenes = {
  SceneOne: {
    screen: SceneOne
  },
  SceneTwo: {
    screen: SceneTwo
  },
  KeyboardIssue: {
    screen: KeyboardIssue
  },
}
const RootNavigator = StackNavigator(AppScenes,
{
  headerMode: "none",
  transitionConfig: TransitionConfiguration
});

export default class App extends Component {
  render () {
    return (
      <RootNavigator />
    )
  }
}
