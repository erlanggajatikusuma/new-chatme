import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const IsMe = ({text, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-end', paddingRight: 16},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.gray,
    maxWidth: '70%',
    borderRadius: 35,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 14,
    color: colors.black1,
  },
  date: {
    fontSize: 11,
    marginTop: 8,
    // color: colors.text.secondary,
  },
});
