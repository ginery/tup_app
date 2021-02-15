import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';
export default function App() {
  useEffect(() => {
    global.global_url = 'https://192.168.0.105/tup-dbs/app/';
    global.images = 'https://192.168.0.105/tup-dbs/assets/items/';
  });
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
