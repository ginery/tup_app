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
  Modal,
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
  Icon,
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function requestForm({navigation, route}) {
  const {
    user_id,
    user_name,
    user_contact,
    user_email,
    user_course_sec,
    user_id_number,
  } = route.params;
  var today = new Date();
  var date =
    today.getFullYear() +
    '-' +
    makeTwoDigits(parseInt(today.getMonth() + 1)) +
    '-' +
    today.getDate();

  var time =
    makeTwoDigits(today.getHours()) +
    ':' +
    makeTwoDigits(today.getMinutes()) +
    ':' +
    makeTwoDigits(today.getSeconds());
  /// make date and time 2 digit
  function makeTwoDigits(time) {
    const timeString = `${time}`;
    if (timeString.length === 2) return time;
    return `0${time}`;
  }
  const dateTime = date + ' ' + time;
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [modalData, setModalData] = useState('');
  const [modalDataItem, setModalDataItem] = useState('');
  const [confirmBtn, setConfirmBtn] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [teacher_name, setTeacher] = useState('');
  const [purpose, setPurpose] = useState('');
  const [date_time, setDate_Time] = useState('');
  const [showRemove, setShowRemove] = useState('');
  // console.log(confirmBtn);
  useEffect(() => {
    getBorrow();
  });

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
        var data2 = responseJson.array_data[0];
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
        var counter = responseJson.array_data.length;
        if (counter > 0) {
          setConfirmBtn(true);
        } else {
          setConfirmBtn(false);
        }
        console.log(counter);
        setFilteredDataSource(data);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(error);
      });
  }

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
        } else {
          setModalData('');
        }
        setModalDataItem(data);

        showModal();
      });
  }

  function confirmRequest() {
    if (
      !user_id.trim() ||
      !teacher_name.trim() ||
      !purpose.trim()
      // !date_time.trim()
    ) {
      Alert.alert('Please fill up all text box.');
    } else {
      const formData = new FormData();
      formData.append('user_id', user_id);
      formData.append('teacher_name', teacher_name);
      formData.append('purpose', purpose);
      formData.append('date', date_time);
      fetch(global.global_url + 'confirm_request.php', {
        method: 'POST',
        header: {
          Accept: 'application/json',
          'Content-type': 'multipart/form-data',
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          var data = responseJson.array_data[0];
          if (data.res == 1) {
            Alert.alert('Confirm Success!!');

            getTransactionHistory();
            setTimeout(() => {
              navigation.goBack();
            }, 3000);
          }
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
          Alert.alert('Internet Connection Error');
        });
    }
  }
  function removeBtn() {
    // console.log('press!');
    setShowRemove(true);
  }
  function timeBtn() {
    setShowRemove(false);
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
          <ScrollView>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                margin: 20,
                borderRadius: 15,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {user_name}
              </Text>
              <Text style={{fontSize: 20, color: 'grey'}}>
                {user_id_number}
              </Text>
              <Text style={{fontSize: 20, color: 'grey'}}>
                {user_course_sec}
              </Text>
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
              {showRemove != true && (
                <Button
                  onPress={() => {
                    removeBtn();
                  }}
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
              )}
              {showRemove == true && (
                <Button
                  onPress={() => {
                    timeBtn();
                  }}
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
                  Hide
                </Button>
              )}

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
                    item_id={item.item_id}
                    bd_id={item.bd_id}
                    b_id={item.b_id}
                    showRemove={showRemove}
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
                onChangeText={(text) => setTeacher(text)}
                value={teacher_name}
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
                onChangeText={(text) => setPurpose(text)}
                value={purpose}
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
                disabled={true}
                //onChangeText={(text) => setDate_Time(text)}
                value={dateTime}
                label="Date and Time Borrowed (y-m-d h-m-s)"
                underlineColor="#a7a7a7"
                style={{marginBottom: 20, fontWeight: 'bold'}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: 'black',
                    primary: '#a7a7a7',
                    background: 'transparent',
                  },
                }}
              />
            </View>
            {confirmBtn == true && (
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
                onPress={() => confirmRequest()}>
                CONFIRM
              </Button>
            )}
          </ScrollView>
        </View>
      </View>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 20,
          padding: 10,
        }}>
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
      </Modal>
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
            <Text>
              {item_name} {showRemove}
            </Text>
            <Text note numberOfLines={1}>
              {item_code}
            </Text>
          </Body>
          <Right>
            {showRemove == true && (
              <Button
                onPress={() => {
                  removeItem(item_id, b_id);
                }}
                style={{
                  //backgroundColor: setBtnDisable(),
                  backgroundColor: '#f44336',
                  borderRadius: 15,
                }}
                labelStyle={{color: 'white', fontSize: 12}}>
                <Text>
                  <Icon name="trash" />
                </Text>
              </Button>
            )}
            {showRemove != true && <Text>x{item_qty}</Text>}
          </Right>
        </ListItem>
      </List>
    </Content>
  );
}
function RowItem({
  item_id,
  user_id,
  user_id_number,
  item_image,
  item_name,
  item_code,
  bd_id,
  b_id,
  item_qty,
  showRemove,
  showModal,
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
        console.log(responseJson);
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
            {showRemove == true && (
              <Button
                onPress={() => {
                  removeItem(item_id, b_id);
                }}
                style={{
                  //backgroundColor: setBtnDisable(),
                  backgroundColor: '#f44336',
                  borderRadius: 15,
                }}
                labelStyle={{color: 'white', fontSize: 12}}>
                <Text>
                  <Icon name="trash" />
                </Text>
              </Button>
            )}
            {showRemove != true && <Text>x{item_qty}</Text>}
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
