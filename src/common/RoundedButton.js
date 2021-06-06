import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const RoundedButton = ({
  textColor = '#fff',
  backgroundColor = '#3d3edb',
  buttonText = 'Press Me',
  width = 120,
  height = 48,
  onPress,
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        console.log('On Press Called');
        onPress && onPress();
      }}>
      <View style={{...styles.container, backgroundColor, width, height}}>
        <Text style={{...styles.textStyles, color: textColor}}>
          {buttonText}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 12,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default RoundedButton;
