import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2675EC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
