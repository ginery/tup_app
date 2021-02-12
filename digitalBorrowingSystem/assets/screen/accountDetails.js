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
              onPress={() => navigation.openDrawer()}
            />

            <Appbar.Action
              icon="clipboard"
              style={{marginLeft: 'auto'}}
              onPress={() => console.log('Pressed delete')}
            />
          </Appbar>
          <View style={styles.textInputWrapper}>
            <Text>test</Text>
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
