import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Link, TextInput} from '../../components';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  const [isHide, setHide] = useState(true);
  const handlePassword = () => {
    setHide(!isHide);
  };

  return (
    <View style={styles.page}>
      <Header title="Login" />
      <Text style={styles.label}>Hi, welcome back</Text>
      <Gap height={35} />
      <TextInput label="E-mail" placeholder="Type your email here" />
      <Gap height={35} />
      <TextInput
        label="Password"
        placeholder="Type your password here"
        type="password"
        password={isHide}
        onPress={handlePassword}
      />
      <Gap height={35} />
      <View style={styles.linkContainer}>
        <Link
          title="Forgot Password?"
          onPress={() => navigation.navigate('Forgot')}
          size={16}
        />
      </View>
      <View>
        <Button text="Login" onPress={() => navigation.replace('Home')} />
        <View style={styles.signup}>
          <Text>Don't have account? </Text>
          <Link title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 27,
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  label: {fontSize: 14, color: '#232323'},
  linkContainer: {alignItems: 'flex-end', marginBottom: 35},
  signup: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
