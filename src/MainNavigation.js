import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Capture from './screens/Capture';
import Display from './screens/Display';

const {Navigator, Screen} = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigator
          initialRouteName="Display"
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name="Display" component={Display} options={{title: null}} />
          <Screen name="Capture" component={Capture} options={{title: null}} />
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
