import {createStackNavigator} from 'react-navigation-stack';
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
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';
//for height of wrapper text info
const width_proportion = '90%';
const btn_wrapper = '45%';
const img_width = '100%';
export default function homeScreen({navigation}) {
  const [text, setText] = React.useState('');
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <PaperProvider>
        <View style={styles.wrapper}>
          <Appbar style={styles.bottom}>
            <Appbar.Action
              icon="menu"
              style={{marginRight: 'auto'}}
              onPress={() => console.log('Pressed archive')}
            />

            <Appbar.Action
              icon="clipboard"
              style={{marginLeft: 'auto'}}
              onPress={() => console.log('Pressed delete')}
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
                }}>
                <Image
                  source={require('../images/multimeter.png')}
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  INSTRUMENT
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
                }}>
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
                }}>
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
    top: 1,
    backgroundColor: '#820100',
  },
  btn_view_wrapper: {
    // backgroundColor: 'steelblue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
