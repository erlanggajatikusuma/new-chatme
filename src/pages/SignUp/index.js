import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {colors} from '../../utils';

const SignUp = ({navigation}) => {
  const [isHide, setHide] = useState(true);
  const handlePassword = () => {
    setHide(!isHide);
  };
  return (
    <View style={styles.page}>
      <Header title="Sign Up" back onPress={() => navigation.goBack()} />
      <Text style={styles.label}>Let's, create your account</Text>
      <Gap height={35} />
      <TextInput label="Name" placeholder="Type your name here" />
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
      <Button text="Sign Up" />
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
