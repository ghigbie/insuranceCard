import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundedButton from './RoundedButton';

const NavigationButtonRow = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RoundedButton
        buttonText={'Lock'}
        onPress={() => {
          console.log('lock pressed');
          console.log('secondary');
        }}
      />
      <RoundedButton
        buttonText={'Take Photo'}
        onPress={() => {
          console.log('take photo pressed');
          console.log('secondary');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
});
export default NavigationButtonRow;
