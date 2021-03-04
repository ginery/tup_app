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
  FlatList,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Appbar,
  TextInput,
} from 'react-native-paper';
import {Card, Container, Content, Left, Thumbnail} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
export default function About({navigation}) {
  // const image = require('../images/a1.png');
  const DATA = [
    {
      id: 1,
      text: 'This photo is of Italy.\nBy @peter_mc_greats',
      image: require('../images/a1.png'),
    },
    {
      id: 2,
      text: 'This photo is of Austria.\nBy @8moments',
      image: require('../images/a1.png'),
    },
    {
      id: 3,
      text: 'This photo is of Iceland.\nBy @r3dmax',
      image: require('../images/a1.png'),
    },
  ];

  // const Item = ({text, image}) => (
  //   <ImageBackground style={styles.slide} source={image}>
  //     <Text style={styles.text}>{text}</Text>
  //   </ImageBackground>
  // );

  //const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#800000" />
      <AppIntroSlider
        data={DATA}
        // renderItem={({item}) => {
        //   console.log(item.image);
        // }}
        renderItem={({item}) => <RowItem text={item.text} image={item.image} />}
        onDone={() => {
          navigation.goBack();
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
function RowItem({text, image}) {
  //Alert.alert('test');
  return (
    <ImageBackground style={styles.slide} source={require('../images/a1.png')}>
      <Text style={styles.text}>{text}</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#8b8b8b',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
  slide: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: '#333',
    marginTop: 92,
    textAlign: 'center',
  },
});
