import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../assets/screen/homeScreen';
import Login from '../assets/screen/loginScreen';
import Signup from '../assets/screen/signupScreen';
const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> 
      <Stack.Screen
        name="Sign Up"
        component={Signup}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home Screen"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
// for you are using nested stack with drawer stack navigation should be export not export default
export {MainStackNavigator};
