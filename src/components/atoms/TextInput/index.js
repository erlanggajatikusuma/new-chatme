import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import {IcEye, IcSend, IcSendActive} from '../../../assets';
import {colors} from '../../../utils';

const TextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  password,
  type,
  onPress,
  chat,
  loading,
}) => {
  if (chat) {
    return (
      <View style={styles.inputContainer}>
        <TextInputRN
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.inputMain}
          placeholderTextColor="#848484"
        />
        {loading ? (
          <View style={styles.send(loading)}>
            <IcSend />
          </View>
        ) : (
          <TouchableOpacity style={styles.send(loading)}>
            <IcSendActive />
          </TouchableOpacity>
        )}
      </View>
    );
  }
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
          placeholderTextColor="#848484"
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
    color: colors.black,
  },
  eye: {position: 'absolute', right: 0},
  inputMain: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 30,
    color: colors.black,
  },
  send: loading => ({
    width: 45,
    height: 45,
    marginLeft: 10,
    backgroundColor: loading ? '#FAFAFA' : colors.mainBlue,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
