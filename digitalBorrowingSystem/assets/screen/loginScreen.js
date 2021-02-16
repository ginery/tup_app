import React, {useState} from 'react';
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
import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
//for height of wrapper text info
const width_proportion = '80%';
const height_proportion = '40%';
const img_with = '30%';
export default function loginScreen({navigation}) {
  useFocusEffect(
    React.useCallback(() => {
      retrieveData();
      return () => retrieveData();
    }),
  );
  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('user_details');
      const value = JSON.parse(valueString);
      if (valueString == null || valueString == '') {
        console.log('empty');
      } else {
        console.log('with value');
        navigation.navigate('Home Screen', {
          user_id: value.user_id,
          user_name: value.user_name,
          user_contact: value.user_contact,
          user_email: value.user_email,
          user_course_sec: value.user_course_sec,
          user_id_number: value.user_id_number,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const setItemStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  };
  const [id_number, setIDNumber] = useState('');
  const [password, setPassword] = useState('');
  function login() {
    //Alert.alert('test');
    if (!id_number.trim() || !password.trim()) {
      Alert.alert('Please fill up all text box.');
    } else {
      // console.log('test');
      const formData = new FormData();
      formData.append('id_number', id_number);
      formData.append('password', password);

      fetch(global.global_url + 'login.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          var data = responseJson.array_data[0];
          console.log(data.res);
          if (data.res == 1) {
            Alert.alert('Successfull Signed up.');
            setItemStorage('user_details', {
              user_id: data.id,
              user_name: data.name,
              user_contact: data.contact_number,
              user_email: data.email,
              user_course_sec: data.course_sec,
              user_id_number: data.id_number,
            });
            navigation.navigate('Home Screen', {
              user_id: data.id,
              user_name: data.name,
              user_contact: data.contact_number,
              user_email: data.email,
              user_course_sec: data.course_sec,
              user_id_number: data.id_number,
            });
            //navigation.goBack();
          } else {
            Alert.alert('Wrong credentials');
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert('Internet Connection Error');
        });
    }
  }
  return (
    <>
      <StatusBar backgroundColor="#800000" />
      <PaperProvider>
        <View style={styles.wrapper}>
          <View style={styles.textInputWrapper}>
            <Image
              source={require('../images/logo_tup.png')}
              style={{width: 100, height: 100, alignSelf: 'center'}}
            />
            <TextInput
              label="ID Number"
              value={id_number}
              onChangeText={(text) => setIDNumber(text)}
              underlineColor="white"
              style={{marginBottom: 20}}
              theme={{
                colors: {
                  placeholder: 'black',
                  text: 'black',
                  primary: 'white',
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
              underlineColor="white"
              style={{marginBottom: 20}}
              theme={{
                colors: {
                  placeholder: 'black',
                  text: 'black',
                  primary: 'white',
                  // underlineColor: 'white',
                  background: 'transparent',
                },
              }}
            />
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
              }}
              onPress={() => login()}>
              Login
            </Button>
            {/* <Text>test</Text> */}
          </View>
          <View style={styles.wrapperFooter}>
            <Text style={{fontWeight: 'bold'}}>
              Do not have an account yet?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
              <Text
                style={{
                  fontWeight: 'bold',
                  borderBottomWidth: 1,
                  borderColor: 'black',
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#8b8b8b',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textColor: {
    color: 'black',
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: width_proportion,
  },
  wrapperFooter: {
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
});
