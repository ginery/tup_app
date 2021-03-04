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
  ImageBackground,
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
  const image = require('../images/a1.png');

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <PaperProvider>
        <StatusBar backgroundColor="#800000" />
        <View style={styles.wrapper}>
          <Appbar style={styles.bottom}>
            <Appbar.Action
              icon="arrow-left-circle"
              style={{marginRight: 'auto'}}
              onPress={() => navigation.goBack()}
            />
          </Appbar>
          <ImageBackground source={image} style={styles.image}>
            <Text>Inside</Text>
          </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
