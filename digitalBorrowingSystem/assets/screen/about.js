import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Appbar,
  TextInput,
} from 'react-native-paper';
import {Card, Container, Content, Left, Thumbnail} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function About({navigation}) {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <PaperProvider>
        <StatusBar backgroundColor="#800000" />
        <View style={styles.wrapper}>
          <Appbar style={styles.bottom}>
            <Appbar.Action
              icon="menu"
              style={{marginRight: 'auto'}}
              onPress={() => navigation.openDrawer()}
            />
            <Appbar.Action
              icon="clipboard"
              style={{marginLeft: 'auto'}}
              onPress={() =>
                navigation.navigate('Request Form', {
                  user_id: user_id,
                  user_name: user_name,
                  user_contact: user_contact,
                  user_email: user_email,
                  user_course_sec: user_course_sec,
                  user_id_number: user_id_number,
                })
              }
            />
          </Appbar>

          <Text>test</Text>
        </View>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#8b8b8b',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  textInputWrapper: {
    height: '100%',
    width: '100%',
    // marginBottom: 'auto',
    marginTop: 55,
    // borderWidth: 5,
    // borderColor: 'black',
    backgroundColor: '#a7a7a7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContentWrapper: {
    height: '100%',

    marginBottom: 'auto',
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 10,
    // backgroundColor: '#',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#800000',
  },
  btn_view_wrapper: {
    // backgroundColor: 'steelblue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
