import { StackNavigator } from 'react-navigation';
import AppScenes from './scenes';
import TransitionConfiguration from './transitions';

const RootNavigator = StackNavigator(AppScenes,
{
  headerMode: "none",
  transitionConfig: TransitionConfiguration
});

export default RootNavigator;
