/**
 * @format
 */
import React, {useState, useEffect} from 'react';
import {Alert, AppRegistry, useContext} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
// Must be outside of any component LifeCycle (such as `componentDidMount`).

// var today = new Date();
// var time =
//   makeTwoDigits(today.getHours()) +
//   ':' +
//   makeTwoDigits(today.getMinutes()) +
//   ':' +
//   makeTwoDigits(today.getSeconds());
// /// make date and time 2 digit
// function makeTwoDigits(time) {
//   const timeString = `${time}`;
//   if (timeString.length === 2) return time;
//   return `0${time}`;
// }
// var hms = '02:59:33'; // your input string
// var a = hms.split(':'); // split it at the colons

// // minutes are worth 60 seconds. Hours are worth 60 minutes.
// var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
// var now = new Date();
// now.setDate(now.getDate());
// now.setHours(15);
// now.setMinutes(45);
// now.setMilliseconds(0);
// console.log(now + '-----' + new Date(Date.now() + 3 * 1000));
// PushNotification.localNotificationSchedule({
//   //... You can use all the options from localNotifications
//   message: 'My Notification Message', // (required)
//   date: now, // in 60 secs
//   allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
// });
const setItemStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error saving data
  }
};

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('REGISTER TOKEN:', token);
    //Alert.alert(token.token);
    var iidToken = token.token;
    setItemStorage('IDToken', {
      idtoken: iidToken,
    });
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    Alert.alert(notification.message);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // Alert.alert('test');
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

AppRegistry.registerComponent(appName, () => App);
