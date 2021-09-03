import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from '../../components';

const Login = () => {
  return (
    <View>
      <Text>Login Page</Text>
      <Button text="Login" />
      <TextInput />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
