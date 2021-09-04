import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Other = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  avatar: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.secondary,
    maxWidth: '80%',
    borderRadius: 35,
    borderBottomLeftRadius: 10,
  },
  text: {
    fontSize: 14,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    marginTop: 8,
    // color: colors.text.secondary,
  },
});
