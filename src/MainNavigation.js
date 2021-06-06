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
});

export default MainNavigation;
