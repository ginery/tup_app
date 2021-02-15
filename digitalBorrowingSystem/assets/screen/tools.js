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
export default function Tools({navigation, route}) {
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
    get_tools();
  }, [1]);

  function get_tools() {
    const formData = new FormData();
    formData.append('user_id', user_id);
    fetch(global.global_url + 'get_tools.php', {
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
          };
        });
        console.log(data);
        setFilteredDataSource(data);
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
            title="Instrument"
            style={{alignItems: 'center', marginRight: 50}}
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
                />
              )}
              keyExtractor={(item) => item.item_id.toString()}
              // ItemSeparatorComponent={FlatListItemSeparator}
            />
          </View>
          {/* </ScrollView> */}
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
}) {
  console.log(b_item);
  // useEffect(() => {
  //   if (status == 0) {
  //     setBtnOnload(true);
  //   } else {
  //     setBtnOnload(false);
  //   }
  // }, [1]);

  // const [btnOnload, setBtnOnload] = React.useState(false);
  const [btnColor, setColorBtn] = React.useState('');
  const [disable, setDisable] = React.useState(false);

  const btnAdd = (id, status) => {
    setColorBtn(status);
    setDisable(true);

    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('item_id', item_id);
    formData.append('qty', 1);

    fetch(global.global_url + 'borrow.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Internet Connection Error');
      });
  };

  return (
    <Content>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{uri: global.images + item_image}} />
          </Left>
          <Body>
            <Text style={{fontWeight: 'bold'}} numberOfLines={1}>
              {item_name}
            </Text>
            <Text note numberOfLines={3}>
              {item_code}
            </Text>
          </Body>
          <Right>
            {item_id == b_item && (
              <Button
                disabled={true}
                onPress={() => btnAdd({item_id}, 1)}
                style={{
                  //backgroundColor: setBtnDisable(),
                  backgroundColor: 'grey',
                  borderRadius: 15,
                }}
                labelStyle={{color: 'white', fontSize: 12}}>
                <Text>add</Text>
              </Button>
            )}
            {item_id != b_item && (
              <Button
                disabled={disable}
                onPress={() => btnAdd({item_id}, 1)}
                style={{
                  //backgroundColor: setBtnDisable(),
                  backgroundColor: btnColor === 1 ? 'grey' : '#800000',
                  borderRadius: 15,
                }}
                labelStyle={{color: 'white', fontSize: 12}}>
                <Text>add</Text>
              </Button>
            )}
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
