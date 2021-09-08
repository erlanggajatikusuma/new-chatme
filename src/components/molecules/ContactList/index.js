import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const ContactList = ({name, email, img, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={img} style={styles.img} />
        <View style={{marginLeft: 17}}>
          <Text style={styles.text}>{name}</Text>
          <Text>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  img: {width: 50, height: 50, backgroundColor: 'grey', borderRadius: 50 / 2},
  text: {fontSize: 20, fontWeight: '700', color: colors.black1},
});
