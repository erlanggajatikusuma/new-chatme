import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack, IcMenu, IcSearch} from '../../../assets';
import {colors} from '../../../utils';

const Header = ({title, back, main, onPress}) => {
  if (main) {
    return (
      <View style={[styles.container, {paddingTop: 50}]}>
        <Text style={styles.label}>Chatme</Text>
        <View style={styles.buttonContent}>
          <TouchableOpacity>
            <IcSearch />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.menu}>
            <IcMenu />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  back: {paddingVertical: 5},
  title: {
    color: '#7E98DF',
    fontSize: 22,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  label: {fontSize: 30, color: colors.secondary, fontWeight: 'bold'},
  buttonContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  menu: {marginLeft: 30},
});
