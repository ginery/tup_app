import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigator} from './StackNavigation';
import Sidebar from '../customDrawer';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      {/* <Drawer.Screen name="Sign Up" component={signupScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
