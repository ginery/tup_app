import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';
export default function App() {
  useEffect(() => {
    // global.global_url = 'http://192.168.2.110/tup-dbs/app/';
    // global.images = 'http://192.168.2.110/tup-dbs/assets/items/';
    global.global_url = 'https://dbstupvlab.online/app/';
    global.images = 'https://dbstupvlab.online/assets/items/';
  });
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
