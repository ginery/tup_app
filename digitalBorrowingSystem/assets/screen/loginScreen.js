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
} from 'react-native';
import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper';
//for height of wrapper text info
const width_proportion = '80%';
const height_proportion = '40%';
const img_with = '30%';
export default function loginScreen() {
  const [text, setText] = React.useState('');
  return (
    <>
      <PaperProvider>
        <View style={styles.wrapper}>
          <StatusBar backgroundColor="#800000" />
          <View style={styles.textInputWrapper}>
            <Image
              source={require('../images/logo_tup.png')}
              style={{width: 100, height: 100, alignSelf: 'center'}}
            />
            <TextInput
              label="ID Number"
              value={text}
              onChangeText={(text) => setText(text)}
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
              value={text}
              onChangeText={(text) => setText(text)}
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
              onPress={() => console.log('Pressed')}>
              Login
            </Button>
            {/* <Text>test</Text> */}
          </View>
          <View style={styles.wrapperFooter}>
            <Text style={{fontWeight: 'bold'}}>
              Do not have an account yet?{' '}
            </Text>
            <TouchableOpacity>
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
