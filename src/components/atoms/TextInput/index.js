import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({value, onChangeText}) => {
  return (
    <View>
      <TextInputRN
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    paddingBottom: 15,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#232323',
  },
});
