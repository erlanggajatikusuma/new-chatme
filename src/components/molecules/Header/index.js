import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack} from '../../../assets';

const Header = ({title, back, onPress}) => {
  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity style={styles.back} onPress={onPress}>
          <IcBack />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 35,
    flexDirection: 'row',
  },
  back: {paddingVertical: 5, paddingRight: 8},
  title: {
    color: '#7E98DF',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});
