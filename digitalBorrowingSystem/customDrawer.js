import React from 'react';
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
function Sidebar({...props}) {
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
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Louiella Igpuara
            </Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              18-503-0104
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
              props.navigation.navigate('Account Details');
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
