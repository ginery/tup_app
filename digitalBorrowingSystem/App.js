import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';
export default function App() {
  useEffect(() => {
    // global.global_url = 'http://192.168.0.105/tup-dbs/app/';
    // global.images = 'http://192.168.0.105/tup-dbs/assets/items/';
    global.global_url = 'https://gecmath.com/tup-dbs/app/';
    global.images = 'https://gecmath.com/tup-dbs/assets/items/';
  });
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
