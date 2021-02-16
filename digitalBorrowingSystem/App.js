import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import React, {useState, useEffect, Alert} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';
import Firebase from '@react-native-firebase/app';
import {View, Text} from 'react-native';
import config from 'react-native-build-config';
export default function App() {
  // useEffect(() => {
  //   global.global_url = 'http://192.168.2.104/tup-dbs/app/';
  //   global.images = 'http://192.168.2.104/tup-dbs/assets/items/';
  // });
  var keyApi = 'AIzaSyAuVxLxNwEnQBYvjsuA64M22jGEZQC3qkk';
  useEffect(() => {
    Firebase.initializeApp(config);
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  });
  return (
    // <NavigationContainer>
    //   <DrawerNavigator />
    // </NavigationContainer>
    <View>
      <Text>Notification</Text>
    </View>
  );
}
