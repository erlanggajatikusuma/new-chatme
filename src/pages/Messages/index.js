import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import {ChatList, Gap, Header} from '../../components';

const Messages = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header main onPress={() => navigation.openDrawer()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatList
          image={ProfileDummy}
          name="Theressa Webb"
          chat="why did you do that?"
          onPress={() => navigation.navigate('ChatScreen')}
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
