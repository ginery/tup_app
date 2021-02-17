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
  FlatList,
  Alert,
} from 'react-native';
import {
  Provider as PaperProvider,
  Button,
  Appbar,
  TextInput,
} from 'react-native-paper';
import {
  Card,
  Container,
  Content,
  Left,
  Thumbnail,
  Header,
  CardItem,
  ListItem,
  Body,
  List,
  Right,
} from 'native-base';
export default function Guide({navigation}) {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="#800000" />
      <View style={styles.wrapper}>
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon="arrow-left-circle"
            style={{marginRight: 'auto'}}
            onPress={() => navigation.goBack()}
          />
          <Appbar.Content
            title="Guide"
            style={{alignItems: 'center', marginRight: 50}}
          />
        </Appbar>

        <View style={{marginTop: 55}}>
          <ScrollView>
            <View
              style={{
                backgroundColor: 'white',
                padding: 20,
                margin: 20,
                borderRadius: 15,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sign up</Text>
              <Text>
                Enter your full name, ID number, section, email address, and
                password to sign up
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
              <Text>
                Login using your ID number and the password you created. Select
                the category of equipment you want to borrow. Instruments,
                tools, components
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Add equipment
              </Text>
              <Text>
                Check the availability of the equipment you want to borrow.
                Click add to borrow.
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Complete request form
              </Text>
              <Text>
                You can see the request form on the upper right side of the
                application. Fill out the teacher’s name, purpose, date and time
              </Text>

              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Submit request form
              </Text>
              <Text>Click confirm button to submit the request form.</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Wait for a notification
              </Text>
              <Text>
                The admin will send you a notification to pick up the equipment
                you borrowed.
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Present your ID
              </Text>
              <Text>Give your ID to the admin to release your equipment.</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Return the equipment
              </Text>
              <Text>
                Return the equipment before 5:00 PM of the same day. Failure to
                return the equipment will block your account from borrowing. You
                can borrow again after 24 hours from the time you return the
                equipment.
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Equipment’s Condition
              </Text>
              <Text>
                If the equipment is not in good condition when returned, a
                written report will be issued to you and your teacher.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#a7a7a7',
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#800000',
  },
});
