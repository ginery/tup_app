import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper';

export default function App() {
  const [text, setText] = React.useState('');
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <PaperProvider style={styles.wrapper}>
        <View>
          <View style={styles.textInputWrapper}>
            <TextInput
              label="ID Number"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </View>
        </View>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode: 'cover',
  },
  textColor: {
    color: 'black',
  },
  textInputWrapper: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
