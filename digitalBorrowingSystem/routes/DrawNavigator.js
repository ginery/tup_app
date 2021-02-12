import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStackNavigation from './StackNavigator';
import Sidebar from '../customDrawer';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Home" component={MainStackNavigation} />
      {/* <Drawer.Screen name="Sign Up" component={signupScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
