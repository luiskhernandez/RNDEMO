import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

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
              default: CardStackStyleInterpolator.forHorizontal(sceneProps),
              customTransition: MyTransition(index, position)
            }[transition]
        }
    }
};

export default TransitionConfiguration;
