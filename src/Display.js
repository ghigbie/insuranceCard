import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Display = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 26,
    marginHorizontal: 14,
  },
  text: {
    color: 'yellow',
  },
});

export default Display;
