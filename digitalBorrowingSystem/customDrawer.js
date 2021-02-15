import React, {useEffect, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Icon,
  Container,
  Header,
  Foster,
  Content,
  Right,
  Button,
  Text,
  ListItem,
  Card,
  Body,
  Left,
  Thumbnail,
} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from 'react-native-reanimated';
function Sidebar({...props}) {
  useEffect(() => {
    retrieveData();
  });
  const [fullname, setFullname] = useState('');
  const [Id_number, setIDNumber] = useState('');
  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('user_details');
      const value = JSON.parse(valueString);
      if (value == null) {
        console.log('empty');
      } else {
        console.log(value);
        setFullname(value.user_name);
        setIDNumber(value.user_id_number);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function signOut() {
    AsyncStorage.removeItem('user_details');
  }
  return (
    <Container>
      <Header style={{backgroundColor: '#ffffff', borderBottomWidth: 0}}>
        <Right>
          <Button transparent onPress={() => props.navigation.closeDrawer()}>
            <Icon style={{color: 'gray'}} name="arrow-back-circle-outline" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Card
          style={{
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: '#a7a7a7',
          }}>
          <Left>
            <Thumbnail
              style={{marginTop: 20, width: 100, height: 100}}
              source={require('./assets/images/profile.png')}
            />
          </Left>
          <Body style={{marginBottom: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{fullname}</Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {Id_number}
            </Text>
          </Body>
        </Card>
        <DrawerContentScrollView {...props}>
          <DrawerItemList
            {...props}
            activeTintColor="#2196f3"
            activeBackgroundColor="rgba(0, 0, 0, .04)"
            inactiveTintColor="rgba(0, 0, 0, .87)"
            inactiveBackgroundColor="transparent"
            style={{backgroundColor: '#000000'}}
            labelStyle={{color: '#a7a7a7', fontWeight: 'bold'}}
          />
          <DrawerItem
            label="Sign Out"
            onPress={() => {
              signOut();
              props.navigation.navigate('Login');
            }}
            icon={() => (
              <Icon size={15} name="power" style={{color: '#a7a7a7'}}></Icon>
            )}
          />
          {/* <DrawerItem label="Sign Out" /> */}
        </DrawerContentScrollView>
      </Content>
    </Container>
  );
}
export default Sidebar;
