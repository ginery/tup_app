import * as React from 'react';
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
} from 'react-native';
import {Provider as PaperProvider, Button} from 'react-native-paper';
const width_proportion = '80%';
const height_proportion = '40%';
const img_with = '30%';
export default function signupScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textInputWrapper}>
        <Image
          source={require('../images/logo_tup.png')}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />

        <TextInput
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
          onPress={() => console.log('Pressed')}>
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
