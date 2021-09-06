import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Link, TextInput} from '../../components';
import {colors, showToastWithGravity, useForm} from '../../utils';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Login = ({navigation}) => {
  const [isHide, setHide] = useState(true);
  const [form, setForm] = useForm({email: '', password: ''});

  const handlePassword = () => {
    setHide(!isHide);
  };

  const login = () => {
    // dispatch({type: 'SET_LOADING', value: true});
    auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('RES LOGIN ==> ', res);
        // dispatch({type: 'SET_LOADING', value: false});
        database()
          .ref(`users/${res.user.uid}/profile`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              // storeData('user', resDB.val());
              navigation.replace('Home');
            }
          });
      })
      .catch(error => {
        // dispatch({type: 'SET_LOADING', value: false});
        console.log('ERROR ==> ', error);
        showToastWithGravity(error.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Login" />
      <Text style={styles.label}>Hi, welcome back</Text>
      <Gap height={35} />
      <TextInput
        label="E-mail"
        placeholder="Type your email here"
        value={form.email}
        onChangeText={value => setForm('email', value)}
      />
      <Gap height={35} />
      <TextInput
        label="Password"
        placeholder="Type your password here"
        type="password"
        password={isHide}
        value={form.password}
        onChangeText={value => setForm('password', value)}
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
        <Button text="Login" onPress={login} />
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
