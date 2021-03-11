import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {
  Provider as PaperProvider,
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
//for height of wrapper text info
const width_proportion = '90%';
const btn_wrapper = '45%';
const img_width = '100%';
export default function homeScreen({navigation, route}) {
  useEffect(() => {
    retrieveData();
    schedNotif();
  }, [1]);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     retrieveData();
  //     schedNotif();
  //     return () => retrieveData();
  //   }),
  // );
  var today = new Date();
  var time =
    makeTwoDigits(today.getHours()) + ':' + makeTwoDigits(today.getMinutes());

  /// make date and time 2 digit
  function makeTwoDigits(time) {
    const timeString = `${time}`;
    if (timeString.length === 2) return time;
    return `0${time}`;
  }
  var timeString = time.toString();
  //form sign in and log in
  const {
    user_id,
    user_name,
    user_contact,
    user_email,
    user_course_sec,
    user_id_number,
  } = route.params;
  // function checkReturn() {
  //   //Alert.alert('test');
  //   const formData = new FormData();
  //   formData.append('user_id', user_id);
  //   fetch(global.global_url + 'checkReturn.php', {
  //     method: 'POST',
  //     header: {
  //       Accept: 'application/json',
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((ResponseJson) => {
  //       var data = ResponseJson.array_data[0];
  //       if (data.res == 1) {
  //         // Alert.alert(
  //         //   'The items you borrow should return first to revoke your account.',
  //         // );
  //         // AsyncStorage.clear();
  //         // navigation.navigate('Login');

  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       Alert.alert('Internet Connection Error');
  //     });
  // }
  function schedNotif() {
    const formData = new FormData();
    formData.append('user_id', user_id);
    fetch(global.global_url + 'checkUserBorrowed.php', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((ResponseJson) => {
        var data = ResponseJson.array_data[0];
        console.log(data.res);
        if (data.res == 1) {
          var now = new Date();
          now.setDate(now.getDate());
          now.setHours(16);
          now.setMinutes(30);
          now.setMilliseconds(0);
          // console.log(now + '-----' + new Date(Date.now() + 3 * 1000));
          PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            message:
              'You have 30 minutes to return the item before your account will be revoke.', // (required)
            date: now, // in 60 secs
            allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
          });
        } else if (data.res == 2) {
          Alert.alert(
            'Account revoked! please return the items to retrieve your account.',
          );
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Internet Connection Error');
      });
  }
  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('IDToken');
      const value = JSON.parse(valueString);
      if (value) {
        //console.log(value.idtoken);
        var idtoken = value.idtoken;
        const formData = new FormData();
        formData.append('user_id', user_id);
        formData.append('idtoken', idtoken);
        fetch(global.global_url + 'getIdToken.php', {
          method: 'POST',
          header: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((ResponseJson) => {
            //console.log(ResponseJson);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PaperProvider>
        <StatusBar backgroundColor="#800000" />
        <View style={styles.wrapper}>
          <Appbar style={styles.bottom}>
            <Appbar.Action
              icon="menu"
              style={{marginRight: 'auto'}}
              onPress={() => navigation.openDrawer()}
            />

            <Appbar.Action
              icon="clipboard"
              style={{marginLeft: 'auto'}}
              onPress={() =>
                navigation.navigate('Request Form', {
                  user_id: user_id,
                  user_name: user_name,
                  user_contact: user_contact,
                  user_email: user_email,
                  user_course_sec: user_course_sec,
                  user_id_number: user_id_number,
                })
              }
            />
          </Appbar>
          <View style={styles.textInputWrapper}>
            <Image
              source={require('../images/tup_app_banner.jpg')}
              style={{
                width: img_width,
                height: img_width,
                resizeMode: 'stretch',
                borderRadius: 2,
              }}
            />
            <View style={styles.btn_view_wrapper}>
              <TouchableOpacity
                style={{
                  // borderWidth: 1,
                  // borderColor: 'black',
                  width: btn_wrapper,
                  alignSelf: 'flex-start',
                  marginTop: 40,
                  alignItems: 'center',
                  padding: 20,
                  borderRadius: 15,
                  backgroundColor: '#8b8b8b',
                }}
                onPress={() =>
                  navigation.navigate('Instruments', {
                    user_id: user_id,
                    user_name: user_name,
                    user_contact: user_contact,
                    user_email: user_email,
                    user_course_sec: user_course_sec,
                    user_id_number: user_id_number,
                  })
                }>
                <Image
                  source={require('../images/multimeter.png')}
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  INSTRUMENTS
                </Text>
                <View
                  style={{
                    borderBottomColor: '#656565',
                    borderBottomWidth: 1,
                    width: 100,
                  }}></View>
              </TouchableOpacity>
              {/* space between */}
              <View
                style={{
                  // borderColor: 'black',
                  // borderWidth: 1,
                  margin: 10,
                }}></View>
              <TouchableOpacity
                style={{
                  // borderWidth: 1,
                  // borderColor: 'black',
                  width: btn_wrapper,
                  alignSelf: 'flex-start',
                  marginTop: 40,
                  alignItems: 'center',
                  padding: 20,
                  borderRadius: 15,
                  backgroundColor: '#8b8b8b',
                }}
                onPress={() =>
                  navigation.navigate('Components', {
                    user_id: user_id,
                    user_name: user_name,
                    user_contact: user_contact,
                    user_email: user_email,
                    user_course_sec: user_course_sec,
                    user_id_number: user_id_number,
                  })
                }>
                <Image
                  source={require('../images/resistor.png')}
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  COMPONENTS
                </Text>
                <View
                  style={{
                    borderBottomColor: '#656565',
                    borderBottomWidth: 1,
                    width: 100,
                  }}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.btn_view_wrapper}>
              <TouchableOpacity
                style={{
                  // borderWidth: 1,
                  // borderColor: 'black',
                  width: btn_wrapper,
                  alignSelf: 'flex-start',
                  marginTop: 40,
                  alignItems: 'center',
                  padding: 20,
                  borderRadius: 15,
                  backgroundColor: '#8b8b8b',
                }}
                onPress={() =>
                  navigation.navigate('Tools', {
                    user_id: user_id,
                    user_name: user_name,
                    user_contact: user_contact,
                    user_email: user_email,
                    user_course_sec: user_course_sec,
                    user_id_number: user_id_number,
                  })
                }>
                <Image
                  source={require('../images/technics.png')}
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  TOOLS
                </Text>
                <View
                  style={{
                    borderBottomColor: '#656565',
                    borderBottomWidth: 1,
                    width: 100,
                  }}></View>
              </TouchableOpacity>
              {/* space between */}
              <View
                style={{
                  // borderColor: 'black',
                  // borderWidth: 1,
                  margin: 10,
                }}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Guide')}
                style={{
                  // borderWidth: 1,
                  // borderColor: 'black',
                  width: btn_wrapper,
                  alignSelf: 'flex-start',
                  marginTop: 40,
                  alignItems: 'center',
                  padding: 20,
                  borderRadius: 15,
                  backgroundColor: '#8b8b8b',
                }}>
                <Image
                  source={require('../images/guide.png')}
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  GUIDE
                </Text>
                <View
                  style={{
                    borderBottomColor: '#656565',
                    borderBottomWidth: 1,
                    width: 100,
                  }}></View>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.textInputWrapper2}>
            
          </View> */}
        </View>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#8b8b8b',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textColor: {
    color: 'black',
  },
  textInputWrapper: {
    height: 150,
    width: width_proportion,
    marginBottom: 'auto',
    marginTop: 80,

    // borderBottomWidth: 5,
    // borderColor: 'black',
  },
  textInputWrapper2: {
    height: 150,
    width: width_proportion,
    marginBottom: 'auto',
    top: 0,
    borderBottomWidth: 5,
    borderColor: 'black',
  },

  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#800000',
  },
  btn_view_wrapper: {
    // backgroundColor: 'steelblue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
