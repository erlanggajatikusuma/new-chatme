import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import {IcEye} from '../../../assets';

const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  password,
  type,
  onPress,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInputRN
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={password}
        />
        {type === 'password' && (
          <TouchableOpacity style={styles.eye} onPress={onPress}>
            <IcEye />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {color: '#848484'},
  inputContainer: {flexDirection: 'row', alignItems: 'center'},
  input: {
    flex: 1,
    paddingBottom: 15,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#232323',
  },
  eye: {position: 'absolute', right: 0},
});
