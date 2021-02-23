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
  Title,
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
              <View style={{marginBottom: 20}}>
                <Title style={{fontSize: 25}}>Guide list</Title>
              </View>
              <View style={{flexDirection: 'row', marginBottom: 100}}>
                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Sign Up
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    Enter your full name, ID number, section, email address, and
                    password to sign up
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    Login using your ID number and the password you created.
                    Select the category of equipment you want to borrow.
                    Instruments, tools, components
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}></View>
              <View style={{flexDirection: 'row', marginBottom: 100}}>
                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Add Equipment
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    Check the availability of the equipment you want to borrow.
                    Click add to borrow.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Complete request form
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    You can see the request form on the upper right side of the
                    application. Fill out the teacher’s name, purpose, date and
                    time
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}></View>
              <View style={{flexDirection: 'row', marginBottom: 100}}>
                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Submit request form
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    Click confirm button to submit the request form.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Wait for a notification
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    The admin will send you a notification to pick up the
                    equipment you borrowed.
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}></View>
              <View style={{flexDirection: 'row', marginBottom: 200}}>
                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Present your ID
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    Give your ID to the admin to release your equipment.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Return the equipment
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    Return the equipment before 5:00 PM of the same day. Failure
                    to return the equipment will block your account from
                    borrowing. You can borrow again after 24 hours from the time
                    you return the equipment.
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}></View>
              <View style={{flexDirection: 'row', marginBottom: 100}}>
                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Submit request form
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    Click confirm button to submit the request form.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Wait for a notification
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    The admin will send you a notification to pick up the
                    equipment you borrowed.
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                }}></View>
              <View style={{flexDirection: 'row', marginBottom: 160}}>
                <TouchableOpacity
                  style={{
                    // borderColor: 'black',
                    // borderWidth: 3,
                    width: '50%',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    height: 100,
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Equipment’s Condition
                  </Text>
                  <Text style={{color: 'grey', marginLeft: 10}}>
                    If the equipment is not in good condition when returned, a
                    written report will be issued to you and your teacher.
                  </Text>
                </TouchableOpacity>
              </View>
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
