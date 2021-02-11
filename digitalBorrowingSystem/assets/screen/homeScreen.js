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
const height_proportion = '40%';
const img_width = '100%';
export default function loginScreen() {
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
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
            />
          </View>
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
    flex: 1,
    flexDirection: 'flex-start',
    justifyContent: 'flex-start',
    width: width_proportion,
  },
  wrapperFooter: {
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 1,
    backgroundColor: '#820100',
  },
});
