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
export default function TransactionHistory({navigation, route}) {
  const {
    user_id,
    user_name,
    user_contact,
    user_email,
    user_course_sec,
    user_id_number,
  } = route.params;
  const [modalData, setModalData] = useState('');
  const [th_teacher_name, setTeacherName] = useState('');
  const [th_date_time_borrowed, setDTB] = useState('');
  const [th_purpose, setPurposeth] = useState('');
  const [modalDataItem, setModalDataItem] = useState('');
  useEffect(() => {
    getTransactionHistory();
  }, [1]);

  function getTransactionHistory() {
    const formData = new FormData();
    formData.append('user_id', user_id);
    fetch(global.global_url + 'getTransactionHistory.php', {
      method: 'POST',
      header: {
        Accept: 'Application/json',
        'Content-type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var ref = responseJson.array_data;
        var data = responseJson.array_data.map(function (item, index) {
          return {
            ctr: item.ctr,
            item_name: item.item_name,
            item_image: item.item_image,
            item_code: item.item_code,
            item_id: item.item_id,
            item_qty: item.item_qty,
            bd_id: item.bd_id,
            b_id: item.b_id,
          };
        });
        console.log(responseJson.array_data[0].ref);
        var ctr = ref.length;
        if (ctr > 0) {
          setModalData(responseJson.array_data[0].ref);
          setTeacherName(responseJson.array_data[0].teacher_name);
          setDTB(responseJson.array_data[0].date_time_barrowed);
          setPurposeth(responseJson.array_data[0].purpose);
        } else {
          setModalData('');
        }
        setModalDataItem(data);

        showModal();
      });
  }

  return (
    <PaperProvider>
      <StatusBar backgroundColor="#800000" />
      <View style={styles.wrapper}>
        <Appbar style={styles.bottom}>
          {/* <Appbar.Action
            icon="arrow-left-circle"
            style={{marginRight: 'auto'}}
            onPress={() => navigation.goBack()}
          /> */}
          <Appbar.Content
            title="Transaction History"
            style={{alignItems: 'center'}}
          />
        </Appbar>

        <View style={{marginTop: 55, height: '65%'}}>
          <View style={{borderColor: 'black', borderWidth: 2, padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Transaction History
            </Text>
            <Text>{modalData} </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              style={{alignContent: 'center', margin: 2}}
              data={modalDataItem}
              renderItem={({item}) => (
                <RowItem1
                  user_id={user_id}
                  user_id_number={user_id_number}
                  item_image={item.item_image}
                  item_name={item.item_name}
                  item_code={item.item_code}
                  item_qty={item.item_qty}
                  item_id={item.item_id}
                  bd_id={item.bd_id}
                  b_id={item.b_id}
                />
              )}
              keyExtractor={(item) => item.bd_id.toString()}
              // ItemSeparatorComponent={FlatListItemSeparator}
            />
          </View>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
            Teacher: {th_teacher_name}
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 5}}>
            Purpose: {th_purpose}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginTop: 5,
              marginBottom: 10,
            }}>
            Date and Time Borrowed: {th_date_time_borrowed}
          </Text>
          <Button
            mode="Outlined"
            labelStyle={{
              color: 'white',
              alignContent: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}
            // loading
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              backgroundColor: '#820100',
              width: '100%',
              alignSelf: 'center',
              // borderRadius: 10,
            }}
            onPress={() => {
              navigation.navigate('Home Screen');
            }}>
            Okay
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}

function RowItem1({
  item_id,
  user_id,
  user_id_number,
  item_image,
  item_name,
  item_code,
  bd_id,
  b_id,
  item_qty,
}) {
  function removeItem(item_id, b_id) {
    const formData = new FormData();
    formData.append('b_id', b_id);
    formData.append('item_id', item_id);
    fetch(global.global_url + 'removeItem.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        var data = responseJson.array_data[0];
        if (data.res == 1) {
          Alert.alert('Remove successfull!');
        } else {
          Alert.alert('Something went wrong');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Internet Connection Error');
      });
    // console.log(item_id);
  }
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
