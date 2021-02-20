import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider as PaperProvider, Button} from 'react-native-paper';
const width_proportion = '80%';
const height_proportion = '40%';
const img_with = '30%';
export default function signupScreen({navigation}) {
  //from sign in and sign up

  const setItemStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  };
  const [name, setName] = useState('');
  const [contact_number, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [course_sec, setCourseSec] = useState('');
  const [id_number, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  function sigup() {
    if (
      !name.trim() ||
      !contact_number.trim() ||
      !email.trim() ||
      !course_sec.trim() ||
      !id_number.trim() ||
      !password.trim()
    ) {
      Alert.alert('Please fill up all text box.');
    } else {
      // console.log('test');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('contact_number', contact_number);
      formData.append('email', email);
      formData.append('course_sec', course_sec);
      formData.append('id_number', id_number);
      formData.append('password', password);
      fetch(global.global_url + 'signin.php', {
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
          } else if (data.res == 2) {
            Alert.alert('User already exist.');
          } else {
            Alert.alert('Something went wrong');
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert('Internet Connection Error');
        });
    }
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.textInputWrapper}>
        <StatusBar backgroundColor="#800000" />
        <Image
          source={require('../images/logo_tup.png')}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />

        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          style={{
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            color: 'black',
            marginTop: 30,
          }}
          placeholder="Name"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={(text) => setContactNumber(text)}
          value={contact_number}
          style={{
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            color: 'black',
            marginTop: 8,
            fontSize: 15,
          }}
          placeholder="Contact Number"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={{
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            color: 'black',
            marginTop: 8,
            fontSize: 15,
          }}
          placeholder="Email Address"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={(text) => setCourseSec(text)}
          value={course_sec}
          style={{
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            color: 'black',
            marginTop: 8,
            fontSize: 15,
          }}
          placeholder="Course & Section"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={(text) => setIdNumber(text)}
          value={id_number}
          style={{
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            color: 'black',
            marginTop: 8,
            fontSize: 15,
          }}
          placeholder="ID Number"
          placeholderTextColor="black"
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
          style={{
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            color: 'black',
            marginTop: 8,
            fontSize: 15,
          }}
          placeholder="Password"
          placeholderTextColor="black"
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
            marginTop: 25,
          }}
          onPress={() => sigup()}>
          Sign Up
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#8b8b8b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: width_proportion,
  },
});
