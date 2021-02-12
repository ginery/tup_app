import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// // import loginScreen from './assets/screen/loginScreen';
// import signupScreen from './assets/screen/signupScreen';

// import homeScreen from './assets/screen/homeScreen';

import DrawerNavigator from './routes/DrawNavigator';
export default function App() {
  useEffect(() => {
    //mylocalhost
    // global.global_url = "http://192.168.2.104/microfilming_mobile/main/";
    // global.notes_web_directory = "http://192.168.2.104/notes";
    // online url
    // global.global_url =
    //   'https://dev.wdysolutions.com/microfilming-mobile/main/';
    // global.notes_web_directory = 'https://dev.wdysolutions.com/main';
  });
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
