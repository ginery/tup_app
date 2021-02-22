import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
  Animated,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Appbar,
  TextInput,
  Title,
} from 'react-native-paper';
import {
  Card,
  Container,
  Content,
  Left,
  Thumbnail,
  Header,
  CardItem,
  ListItem,
  Body,
  List,
  Right,
} from 'native-base';
export default function Guide({navigation}) {
  useState(() => {
    setTimeout(() => {
      navigation.navigate('Splash Screen');
    }, 2000);
  });
  return (
    <PaperProvider>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <StatusBar backgroundColor="#800000" />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 350,
              height: 120,
              resizeMode: 'stretch',
            }}
            source={require('../images/tg.png')}
          />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#a7a7a7',
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#800000',
  },
});
