import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationButtonRow from '../common/NavigationButtonRow';

const Capture = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Capture</Text>
      <NavigationButtonRow navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Capture;
