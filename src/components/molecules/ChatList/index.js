import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const ChatList = ({image, name, chat, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} />
        <View style={styles.chatContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.chat}>{chat}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', marginBottom: 28},
  image: {borderRadius: 30, width: 82, height: 82},
  chatContent: {marginLeft: 15},
  name: {color: colors.black1, fontSize: 23, fontWeight: 'bold'},
  chat: {color: colors.secondary, fontSize: 16},
});
