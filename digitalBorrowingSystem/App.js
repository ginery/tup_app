import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import loginScreen from './assets/screen/loginScreen';
import signupScreen from './assets/screen/signupScreen';
import homeScreen from './assets/screen/homeScreen';
import Sidebar from './customDrawer';
// import Navigator from './routes/drawer';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="test" />
    </DrawerContentScrollView>
  );
}
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
      <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={homeScreen} />
        <Drawer.Screen name="Sign Up" component={signupScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
