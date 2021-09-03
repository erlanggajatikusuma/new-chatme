import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7E98DF',
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {fontSize: 16, fontWeight: 'bold', color: '#FFF'},
});
