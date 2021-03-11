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
export default function Instrument({navigation, route}) {
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
    get_intruments();
  }, [1]);

  function get_intruments() {
    const formData = new FormData();
    formData.append('user_id', user_id);
    fetch(global.global_url + 'get_instruments.php', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var data = responseJson.array_data.map(function (item, index) {
          return {
            borrow_item: item.borrow_item,
            b_item: item.b_item,
            item_name: item.item_name,
            item_image: item.item_image,
            item_code: item.item_code,
            item_id: item.item_id,
            item_status: item.item_status,
          };
        });
        console.log(responseJson);
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
            title="Instruments"
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
                  borrow_item={item.borrow_item}
                  item_status={item.item_status}
                  get_intruments={get_intruments}
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
  item_status,
  borrow_item,
  get_intruments,
}) {
  console.log(borrow_item);
  // useEffect(() => {
  //   if (status == 0) {
  //     setBtnOnload(true);
  //   } else {
  //     setBtnOnload(false);
  //   }
  // }, [1]);

  // const [btnOnload, setBtnOnload] = React.useState(false);
  const [btnShow, setBtnShow] = React.useState(1);
  const [disable, setDisable] = React.useState(false);
  const btnCancel = () => {
    //Alert.alert('test');
    console.log('cancel!');
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('item_id', item_id);
    formData.append('qty', 1);

    fetch(global.global_url + 'cancelItem.php', {
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
        var data = responseJson.array_data[0];
        if (data.res == 1) {
          setBtnShow(1);
          get_intruments();
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Internet Connection Error');
      });
  };
  const btnAdd = (id, status) => {
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
        get_intruments();
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
                // disabled={true}
                onPress={() => btnCancel({item_id}, 0)}
                style={{
                  //backgroundColor: setBtnDisable(),
                  backgroundColor: 'grey',
                  borderRadius: 15,
                }}
                labelStyle={{color: 'white', fontSize: 12}}>
                <Text>Cancel</Text>
              </Button>
            )}
            {item_id != b_item && (
              // btnShow == 1
              <Button
                disabled={borrow_item == 0 && item_status == 1 ? false : true}
                onPress={() => btnAdd({item_id}, 1)}
                style={{
                  //backgroundColor: setBtnDisable(),
                  backgroundColor:
                    borrow_item == 0 && item_status == 1 ? '#800000' : 'grey',
                  borderRadius: 15,
                }}
                labelStyle={{color: 'white', fontSize: 12}}>
                {borrow_item == 0 && item_status == 1 && <Text>add</Text>}
                {(borrow_item == 1 || item_status == 0) && <Text>N/A</Text>}
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
