import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';
export default function App() {
  useEffect(() => {
    //  mylocalhost
    global.global_url = 'http://192.168.0.105/tup-dbs/app/';
    global.images = 'http://192.168.0.105/tup-dbs/assets/items/';
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
