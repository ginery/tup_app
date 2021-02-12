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
  Left,
  Thumbnail,
  Footer,
} from 'native-base';
import Animated from 'react-native-reanimated';
function Sidebar({progress, ...props}) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <Container>
      <Header style={{backgroundColor: '#ffffff', borderBottomWidth: 0}}>
        <Right>
          <Button transparent onPress={() => props.navigation.closeDrawer()}>
            <Icon style={{color: 'blue'}} name="md-arrow-back-circle" />
          </Button>
        </Right>
      </Header>
      <Content>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
              }}
            />
          </Left>
        </ListItem>
        <DrawerContentScrollView {...props}>
          <Animated.View style={{transform: [{translateX}]}}>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Rate Us" /> */}
          </Animated.View>
        </DrawerContentScrollView>
      </Content>
      {/* <Footer /> */}
    </Container>
  );
}
export default Sidebar;
