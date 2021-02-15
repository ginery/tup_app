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
import {
  Provider as PaperProvider,
  Button,
  Appbar,
  TextInput,
} from 'react-native-paper';
import {Card, Container, Content, Left, Thumbnail} from 'native-base';

//for height of wrapper text info
const width_proportion = '100%';
const height = '35%';
const img_width = '100%';
export default function accountDetails({navigation}) {
  const [text, setText] = React.useState('Test Name');
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
              Louiella Igpuara
            </Text>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
              18-503-0104
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
                value={text}
                onChangeText={(text) => setText(text)}
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
                value={text}
                onChangeText={(text) => setText(text)}
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
                value={text}
                onChangeText={(text) => setText(text)}
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
                value={text}
                onChangeText={(text) => setText(text)}
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
                value={text}
                onChangeText={(text) => setText(text)}
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
                onPress={() => console.log('Pressed')}>
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
