import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const RoundedButton = ({
  textColor = '#fff',
  backgroundColor = '#3d3edb',
  buttonText = 'Press Me',
  onPress,
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        console.log('On Press Called');
        onPress && onPress();
      }}>
      <View style={{...styles.container, backgroundColor}}>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 2,
  },
  textStyles: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default RoundedButton;
