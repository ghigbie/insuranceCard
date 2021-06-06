import 'react-native-gesture-handler';
import React from 'react';
import {View, Modal, Pressable, Text, StyleSheet, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Capture from './Capture';
import Display from './Display';
import RoundedButton from './common/RoundedButton';

const {Navigator, Screen} = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigator initialRouteName="Display" r>
          <Screen name="Display" component={Display} />
          <Screen name="Capture" component={Capture} />
        </Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 2,
    backgroundColor: '#ebebeb',
    borderRadius: 20,
    padding: 36,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#dc3545',
  },
  warningTitle: {
    color: '#dc3545',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 14,
  },
  textStyle: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
  },
});

export default MainNavigation;
