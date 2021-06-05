import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Display = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}></Image>
      </View>
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
    backgroundColor: '#e4e4e4',
    marginVertical: 26,
    marginHorizontal: 14,
    borderColor: '#4ba2fa',
  },
  image: {
    resizeMode: 'contain',
  },
});

export default Display;
