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
  Alert,
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
import CounterInput from 'react-native-counter-input';
export default function Components({navigation, route}) {
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
    //retrieveData();
    get_components();
  }, [1]);

  function get_components() {
    const formData = new FormData();
    formData.append('user_id', user_id);
    fetch(global.global_url + 'get_components.php', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var data = responseJson.array_data[0];
        var data = responseJson.array_data.map(function (item, index) {
          return {
            b_item: item.b_item,
            item_name: item.item_name,
            item_image: item.item_image,
            item_code: item.item_code,
            item_id: item.item_id,
            item_qty: item.item_qty,
            item_status: item.item_status,
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
          <Appbar.Content
            title="Components"
            style={{alignItems: 'center', marginRight: 50}}
          />
        </Appbar>

        <View style={{marginTop: 55}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              margin: 20,
              borderRadius: 15,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{alignContent: 'center', margin: 2}}
              data={filteredDataSource}
              renderItem={({item}) => (
                <RowItem
                  user_id={user_id}
                  user_id_number={user_id_number}
                  item_image={item.item_image}
                  item_name={item.item_name}
                  item_code={item.item_code}
                  item_id={item.item_id}
                  b_item={item.b_item}
                  item_qty={item.item_qty}
                  item_status={item.item_status}
                />
              )}
              keyExtractor={(item) => item.item_id.toString()}
              // ItemSeparatorComponent={FlatListItemSeparator}
            />
          </View>
        </View>
      </View>
    </PaperProvider>
  );
}

function RowItem({
  b_item,
  user_id,
  user_id_number,
  item_image,
  item_name,
  item_code,
  item_id,
  item_qty,
  item_status,
}) {
  // console.log(item_qty);
  var quantiy = item_qty.toString();
  const [item_quantity, setQuantity] = useState(quantiy);
  function btnAdd(i_id) {
    var add = parseInt(item_quantity) + 1;
    setQuantity(add.toString());

    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('item_id', i_id);
    formData.append('qty', 1);

    fetch(global.global_url + 'borrow_components.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Internet Connection Error');
      });
  }
  function btnMinus(i_id) {
    if (parseInt(item_quantity) == 0) {
      var minus = 0;
    } else {
      var minus = parseInt(item_quantity) - 1;
      setQuantity(minus.toString());
      const formData = new FormData();
      formData.append('user_id', user_id);
      formData.append('item_id', i_id);
      formData.append('qty', 1);

      fetch(global.global_url + 'borrow_components_minus.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
          Alert.alert('Internet Connection Error');
        });
    }
  }
  return (
    <Content>
      <List>
        {item_status == 1 && (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: global.images + item_image}} />
            </Left>
            <Body>
              <Text style={{fontWeight: 'bold'}}>{item_name}</Text>
              <Text note numberOfLines={3}>
                {item_code}
              </Text>
              <Text>{item_qty}</Text>
            </Body>
            <Right>
              <Button
                onPress={() => btnAdd(item_id)}
                style={{backgroundColor: '#800000', borderRadius: 0}}
                labelStyle={{color: 'white', fontSize: 12}}>
                <Text>+</Text>
              </Button>
              <TextInput
                onChangeText={(text) => setQuantity(text)}
                value={item_quantity}
                disabled={true}
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  // borderBottomWidth: 1,
                  // borderColor: 'black',
                  width: 62,
                  fontWeight: 'bold',
                  height: 30,
                }}
              />
              <Button
                onPress={() => btnMinus(item_id)}
                style={{backgroundColor: 'grey', borderRadius: 0}}
                labelStyle={{color: 'white', fontSize: 12}}>
                <Text>-</Text>
              </Button>
            </Right>
          </ListItem>
        )}
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
