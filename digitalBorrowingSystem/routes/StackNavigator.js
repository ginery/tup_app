import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../assets/screen/homeScreen';
import LoginScreen from '../assets/screen/loginScreen';
import SignupScreen from '../assets/screen/signupScreen';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Sign Up"
        component={SignupScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
