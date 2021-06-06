import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundedButton from './RoundedButton';

const NavigationButtonRow = ({navigation}) => {
  return (
    <View style={styles.container}>
      <RoundedButton
        backgroundColor={'#ffc107'}
        textColor={'#000'}
        buttonText={'Lock Photo'}
        onPress={() => {
          navigation.navigate('Display');
        }}
      />
      <RoundedButton
        backgroundColor={'#28a745'}
        textColor={'#fff'}
        buttonText={'Take Photo'}
        onPress={() => {
          navigation.navigate('Capture');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default NavigationButtonRow;
