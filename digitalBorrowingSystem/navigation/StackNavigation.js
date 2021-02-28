import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../assets/screen/homeScreen';
import Login from '../assets/screen/loginScreen';
import Signup from '../assets/screen/signupScreen';
import AccountDetails from '../assets/screen/accountDetails';
import RequestForm from '../assets/screen/request_from';
import Instruments from '../assets/screen/instruments';
import Components from '../assets/screen/components';
import Tools from '../assets/screen/tools';
import Guide from '../assets/screen/guide';
import About from '../assets/screen/about';
import SplashScreen from '../assets/screen/splashScreen.js';
import SplashScreen2 from '../assets/screen/splashScreen2.js';
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Splash Screen2"
        component={SplashScreen2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash Screen"
        component={SplashScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Request Form"
        component={RequestForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Instruments"
        component={Instruments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Components"
        component={Components}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tools"
        component={Tools}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Guide"
        component={Guide}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AccountDetailsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account Details"
        component={AccountDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const AboutStact = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
// for you are using nested stack with drawer stack navigation should be export not export default
export {MainStackNavigator, AccountDetailsStack, AboutStact};
