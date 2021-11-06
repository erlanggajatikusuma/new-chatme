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
        const url =
          'https://firebasestorage.googleapis.com/v0/b/chatme11-1e5d6.appspot.com/o/null-photo.png?alt=media&token=2b9ff84d-6734-41f7-b59a-c8bd99754779';
        const data = {
          name: form.name,
          email: form.email,
          uid: success.user.uid,
          photo: url,
        };

        database().ref(`users/${success.user.uid}/profile`).set(data);
        database().ref(`registered/${success.user.uid}/`).set(data);

        storeData('user', data);
        navigation.replace('Login');
        console.log('register sukses: ', success);
      })
      .catch(error => {
        // setLoading(false);
        console.log('ERROR ==> ', error.message);
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
