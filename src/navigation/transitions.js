import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Dimensions } from 'react-native';

const { width , height } = Dimensions.get('window');
const fromToptoBottom = (index, position) => {
  const inputRange = [0, index, index + 0.80, index +1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [1,1,1,1]
  })
  const translateY = position.interpolate({
    inputRange,
    outputRange: [height, 0, 0,0]
  })

  return {
    opacity,
    transform: [
      {translateY}
    ]
  }
}

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
            const {index, route} = scene;
            const params = route.params || {}
            const transition = params.transition || 'default'

            return {
              // list of transitions
              default: null,
              customTransition: MyTransition(index, position)
            }[transition]
        }
    }
};

export default TransitionConfiguration;
