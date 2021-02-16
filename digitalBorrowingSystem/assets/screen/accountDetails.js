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
  Alert,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Appbar,
  TextInput,
} from 'react-native-paper';
import {Card, Container, Content, Left, Thumbnail} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
//for height of wrapper text info
const width_proportion = '100%';
const height = '35%';
const img_width = '100%';
export default function accountDetails({navigation}) {
  useEffect(() => {
    retrieveData();
  }, [1]);
  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('user_details');
      const value = JSON.parse(valueString);
      if (valueString == null || valueString == '') {
        console.log('empty');
      } else {
        console.log('with value');
        setUserID(value.user_id);
        setFullname(value.user_name);
        setCourseSec(value.user_course_sec);
        setEmail(value.user_email);
        setIdNumber(value.user_id_number);
      }
    } catch (error) {
      console.log(error);
    }
  };
  function signOut() {
    AsyncStorage.removeItem('user_details');
  }
  const [user_id, setUserID] = useState('');
  const [fullname, setFullname] = useState('');
  const [course_sec, setCourseSec] = useState('');
  const [email, setEmail] = useState('');
  const [id_number, setIdNumber] = useState('');

  const [password, setPassword] = React.useState('');

  function updateAccount() {
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('fullname', fullname);
    formData.append('course_sec', course_sec);
    formData.append('email', email);
    formData.append('id_number', id_number);
    formData.append('password', password);
    fetch(global.global_url + 'updateAccount.php', {
      method: 'POST',
      header: {
        Accept: 'application/java',
        'Content-type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var data = responseJson.array_data[0];
        console.log(responseJson);
        if (data.res == 1) {
          Alert.alert('Sucess! you will be log out for security purposes.');
          navigation.navigate('Login');
          signOut();
        } else {
          Alert.alert('Something went wrong.');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Internet Connection Error');
      });
  }
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
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
            <Thumbnail
              style={{marginTop: 15, width: 90, height: 90}}
              source={require('../images/profile.png')}
            />
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              {fullname}
            </Text>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              {id_number}
            </Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              width: 400,
              margin: 0,
              padding: 0,
            }}>
            <View style={styles.textContentWrapper}>
              <TextInput
                label="FullName"
                value={fullname}
                onChangeText={(text) => setFullname(text)}
                underlineColor="#a7a7a7"
                style={{marginBottom: 20}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: '#a7a7a7',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
              <TextInput
                label="Course and Section"
                value={course_sec}
                onChangeText={(text) => setCourseSec(text)}
                underlineColor="#a7a7a7"
                style={{marginBottom: 20}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: '#a7a7a7',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
              <TextInput
                label="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                underlineColor="#a7a7a7"
                style={{marginBottom: 20}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: '#a7a7a7',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
              <TextInput
                label="ID Number"
                value={id_number}
                onChangeText={(text) => setIdNumber(text)}
                underlineColor="#a7a7a7"
                style={{marginBottom: 20}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: '#a7a7a7',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
              <TextInput
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                underlineColor="#a7a7a7"
                style={{marginBottom: 20}}
                theme={{
                  colors: {
                    placeholder: '#a7a7a7',
                    text: '#a7a7a7',
                    primary: '#a7a7a7',
                    // underlineColor: 'white',
                    background: 'transparent',
                  },
                }}
              />
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
                onPress={() => updateAccount()}>
                UPDATE
              </Button>
            </View>
          </ScrollView>
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
    width: width_proportion,
  },
  textInputWrapper: {
    height: height,
    width: width_proportion,
    // marginBottom: 'auto',
    marginTop: 55,
    // borderWidth: 5,
    // borderColor: 'black',
    backgroundColor: '#a7a7a7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContentWrapper: {
    height: height,

    marginBottom: 'auto',
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 10,
    // backgroundColor: '#',
    // alignItems: 'center',
    // justifyContent: 'center',
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
