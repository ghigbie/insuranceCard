import React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import Capture from './Capture';
import Display from './Display';
import RoundedButton from './common/RoundedButton';

const MainNavigation = () => {
  return (
    <View style={styles.container}>
      <Capture />
      <Display />
      <View style={styles.buttonContainer}>
        <RoundedButton buttonText={'Lock Photo'} />
        <RoundedButton buttonText={'Snap Photo'} />
      </View>
    </View>
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
});

export default MainNavigation;
