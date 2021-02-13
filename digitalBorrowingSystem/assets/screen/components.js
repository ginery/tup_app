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
import Counter from 'react-native-counters';
export default function Components({navigation}) {
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
          <Appbar.Content
            title="Components"
            style={{alignItems: 'center', marginRight: 50}}
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
                      <Counter start={1} onChange={this.onChange.bind(this)} />
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
                      <Text note numberOfLines={3}>
                        Its time to build a difference fsadfasfasfasd
                      </Text>
                    </Body>
                    <Right>
                      <Button
                        style={{backgroundColor: '#800000', borderRadius: 15}}
                        labelStyle={{color: 'white', fontSize: 12}}>
                        <Text>add</Text>
                      </Button>
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
                      <Button
                        style={{backgroundColor: '#800000', borderRadius: 15}}
                        labelStyle={{color: 'white', fontSize: 12}}>
                        <Text>add</Text>
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </View>
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
