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
  FlatList,
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

export default function requestForm({navigation, route}) {
  const {
    user_id,
    user_name,
    user_contact,
    user_email,
    user_course_sec,
    user_id_number,
  } = route.params;
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  useEffect(() => {
    getBorrow();
  }, [1]);
  function getBorrow() {
    const formData = new FormData();
    formData.append('user_id', user_id);
    fetch(global.global_url + 'get_borrow.php', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var data = responseJson.array_data.map(function (item, index) {
          return {
            item_name: item.item_name,
            item_image: item.item_image,
            item_code: item.item_code,
            item_qty: item.item_qty,
            bd_id: item.bd_id,
            b_id: item.b_id,
          };
        });
        console.log(data);
        setFilteredDataSource(data);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Internet Connection Error');
      });
  }
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
          {/* <ScrollView> */}
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              margin: 20,
              borderRadius: 15,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{user_name}</Text>
            <Text style={{fontSize: 20, color: 'grey'}}>{user_id_number}</Text>
            <Text style={{fontSize: 20, color: 'grey'}}>{user_course_sec}</Text>
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

            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              style={{alignContent: 'center', margin: 2}}
              data={filteredDataSource}
              renderItem={({item}) => (
                <RowItem
                  user_id={user_id}
                  user_id_number={user_id_number}
                  item_image={item.item_image}
                  item_name={item.item_name}
                  item_code={item.item_code}
                  item_qty={item.item_qty}
                  bd_id={item.bd_id}
                  b_id={item.b_id}
                />
              )}
              keyExtractor={(item) => item.bd_id.toString()}
              // ItemSeparatorComponent={FlatListItemSeparator}
            />
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
          {/* </ScrollView> */}
        </View>
      </View>
    </PaperProvider>
  );
}

function RowItem({
  user_id,
  user_id_number,
  item_image,
  item_name,
  item_code,
  bd_id,
  b_id,
  item_qty,
}) {
  return (
    <Content>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{uri: global.images + item_image}} />
          </Left>
          <Body>
            <Text>{item_name}</Text>
            <Text note numberOfLines={1}>
              {item_code}
            </Text>
          </Body>
          <Right>
            <Text>x{item_qty}</Text>
          </Right>
        </ListItem>
      </List>
    </Content>
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
