import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';
import firebase from './assets/utils/firebase';
export default function App() {
  useEffect(() => {
    global.global_url = 'http://192.168.2.103/tup-dbs/app/';
    global.images = 'http://192.168.2.103/tup-dbs/assets/items/';
  });
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
