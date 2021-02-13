import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Appbar,
  TextInput,
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

export default function requestForm({navigation}) {
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };

  return (
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
        <View style={{marginTop: 55}}>
          <ScrollView>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                margin: 20,
                borderRadius: 15,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Louiella Igpuara
              </Text>
              <Text style={{fontSize: 20, color: 'grey'}}>18-503-0104</Text>
              <Text style={{fontSize: 20, color: 'grey'}}>BSECESP-B</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                marginLeft: 20,
                marginRight: 20,
              }}></View>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                margin: 20,
                borderRadius: 15,
                flexDirection: 'column',
              }}>
              <Button
                small
                style={{
                  backgroundColor: '#a7a7a7',
                  width: 70,
                  borderRadius: 15,
                  alignSelf: 'flex-end',
                }}
                labelStyle={{
                  color: 'white',
                  alignContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 10,
                }}>
                Edit
              </Button>

              <Content>
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../images/resistor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note numberOfLines={1}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                    <Right>
                      <Text>x1</Text>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../images/resistor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note numberOfLines={1}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                    <Right>
                      <Text>x1</Text>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail
                        square
                        source={require('../images/resistor.png')}
                      />
                    </Left>
                    <Body>
                      <Text>Sankhadeep</Text>
                      <Text note numberOfLines={1}>
                        Its time to build a difference . .
                      </Text>
                    </Body>
                    <Right>
                      <Text>x1</Text>
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </View>
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                marginLeft: 20,
                marginRight: 20,
              }}></View>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                margin: 20,
                borderRadius: 15,
                flexDirection: 'column',
              }}>
              <TextInput
                label="Teacher"
                underlineColor="#a7a7a7"
                style={{marginBottom: 20, fontWeight: 'bold'}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: 'black',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
              <TextInput
                label="Purpose"
                underlineColor="#a7a7a7"
                style={{marginBottom: 20, fontWeight: 'bold'}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: 'black',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
              <TextInput
                label="Teacher"
                underlineColor="#a7a7a7"
                style={{marginBottom: 20, fontWeight: 'bold'}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: 'black',
                    primary: '#a7a7a7',

                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
              <TextInput
                label="Date & Time Borrowed"
                underlineColor="#a7a7a7"
                style={{marginBottom: 20, fontWeight: 'bold'}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: 'black',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
            </View>
            <Button
              mode="Outlined"
              labelStyle={{
                color: '#6a96c2',
                alignContent: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}
              // loading
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                backgroundColor: 'white',
                width: 200,
                alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 10,
              }}
              onPress={() => console.log('Pressed')}>
              CONFIRM
            </Button>
          </ScrollView>
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
