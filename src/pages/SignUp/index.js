import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors, showToastWithGravity, storeData, useForm} from '../../utils';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignUp = ({navigation}) => {
  const [isHide, setHide] = useState(true);
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handlePassword = () => {
    setHide(!isHide);
  };

  const signUp = () => {
    console.log(form);

    // setLoading(true);
    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        // setLoading(false);
        setForm('reset');
        const data = {
          name: form.name,
          email: form.email,
          uid: success.user.uid,
        };

        database().ref(`users/${success.user.uid}/profile`).set(data);
        database().ref(`registered/${success.user.uid}/`).set(data);

        storeData('user', data);
        navigation.replace('Home');
        console.log('register sukses: ', success);
      })
      .catch(error => {
        // setLoading(false);
        console.log('ERROR ==> ', error);
        showToastWithGravity(error.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Sign Up" back onPress={() => navigation.goBack()} />
      <Text style={styles.label}>Let's, create your account</Text>
      <Gap height={35} />
      <TextInput
        label="Name"
        placeholder="Type your name here"
        value={form.name}
        onChangeText={value => setForm('name', value)}
      />
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
      <Button text="Sign Up" onPress={signUp} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 27,
    justifyContent: 'center',
  },
  label: {fontSize: 14, color: '#232323'},
});
