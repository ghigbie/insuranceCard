import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Display = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./test_data/fake_card.jpeg')}
          style={styles.image}
        />
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
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export default Display;
