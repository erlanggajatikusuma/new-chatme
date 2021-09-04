import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ChatItem, Gap, Header} from '../../components';

const Messages = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header main onPress={() => navigation.openDrawer()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <ChatItem
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
        />
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 27},
});
