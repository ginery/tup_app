import {createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from '@react-navigation/native';
import homeScreen from '../assets/screen/homeScreen';
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: homeScreen,
  },
});

export default createAppContainer(RootDrawerNavigator);
