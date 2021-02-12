import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'native-base';
import {MainStackNavigator, AccountDetailsStack} from './StackNavigation';
import Sidebar from '../customDrawer';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: (config) => (
            <Icon size={15} name="home" style={{color: '#a7a7a7'}}></Icon>
          ),
        }}
        component={MainStackNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: (config) => (
            <Icon
              size={15}
              name="document-text"
              style={{color: '#a7a7a7'}}></Icon>
          ),
        }}
        name="Account Details"
        component={AccountDetailsStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
