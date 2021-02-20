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
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    console.log('fadeinimage');
  };

  useState(() => {
    // navigation.navigate('Login');
    fadeIn();
    setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
  });
  return (
    <PaperProvider>
      <StatusBar backgroundColor="#800000" />
      <Animated.View
        style={[
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{borderColor: 'black', borderRightWidth: 3}}>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'stretch',
                }}
                source={require('../images/logo_tup.png')}
              />
            </View>
            <View>
              <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 25}}>
                Digital
              </Text>
              <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 25}}>
                Borrowing
              </Text>
              <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 25}}>
                System
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'grey',
                }}>
                TUPV Laboratories
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
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
