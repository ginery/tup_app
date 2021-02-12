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
} from 'native-base';
function Sidebar({...props}) {
  return (
    <Container>
      <Header style={{backgroundColor: '#ffffff', borderBottomWidth: 0}}>
        <Right>
          <Button transparent onPress={() => props.navigation.closeDrawer()}>
            <Icon style={{color: 'blue'}} name="times-circle" />
          </Button>
        </Right>
      </Header>
      <Content>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Rate Us" />
        </DrawerContentScrollView>
      </Content>
    </Container>
  );
}
export default Sidebar;
